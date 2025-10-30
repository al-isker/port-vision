import { composeRefs } from '@radix-ui/react-compose-refs';
import { ControllerProps, FieldValues, useController } from 'react-hook-form';

import {
	DateRangePicker,
	DateRangePickerProps,
	PickerValidDate
} from './DateRangePicker';

type Props<FV extends FieldValues, TDate extends PickerValidDate> = Omit<
	ControllerProps<FV>,
	'name' | 'render'
> & {
	nameStart: ControllerProps<FV>['name'];
	nameEnd: ControllerProps<FV>['name'];
} & Omit<
		DateRangePickerProps<TDate>,
		| 'inputRef'
		| 'nameStart'
		| 'nameEnd'
		| 'value'
		| 'defaultValue'
		| 'disabledStart'
		| 'disabledEnd'
	>;

export const RHFDateRangePicker = <
	FV extends FieldValues,
	TDate extends PickerValidDate
>({
	control,
	nameStart,
	nameEnd,
	rules,
	shouldUnregister,
	defaultValue,
	onChange: propOnChange,
	disabled,
	...restProps
}: Props<FV, TDate>) => {
	const start = useController({
		name: nameStart,
		control,
		rules,
		shouldUnregister,
		defaultValue,
		disabled
	});

	const end = useController({
		name: nameEnd,
		control,
		rules,
		shouldUnregister,
		defaultValue,
		disabled
	});

	const handleChange: DateRangePickerProps<TDate>['onChange'] = ([
		startValue,
		endValue
	]) => {
		propOnChange?.([startValue, endValue]);

		start.field.onChange(startValue);
		end.field.onChange(endValue);
	};

	return (
		<DateRangePicker
			inputRef={composeRefs(start.field.ref, end.field.ref)}
			value={[start.field.value ?? null, end.field.value ?? null]}
			nameStart={start.field.name}
			nameEnd={end.field.name}
			helperTextStart={start.fieldState.error?.message}
			helperTextEnd={end.fieldState.error?.message}
			onChange={handleChange}
			errorStart={start.fieldState.invalid}
			errorEnd={end.fieldState.invalid}
			disabledStart={start.field.disabled}
			disabledEnd={end.field.disabled}
			{...restProps}
		/>
	);
};
