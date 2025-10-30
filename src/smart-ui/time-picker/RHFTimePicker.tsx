import { deepmerge } from '@mui/utils';
import { Controller, ControllerProps, FieldValues } from 'react-hook-form';

import { multiple } from '@/shared/utils/functions/multiple';

import { PickerValidDate, TimePicker, TimePickerProps } from './TimePicker';

type Props<FV extends FieldValues, TDate extends PickerValidDate> = Omit<
	ControllerProps<FV>,
	'render'
> &
	Omit<
		TimePickerProps<TDate>,
		'inputRef' | 'name' | 'value' | 'defaultValue' | 'disabled'
	>;

export const RHFTimePicker = <
	FV extends FieldValues,
	TDate extends PickerValidDate
>({
	control,
	name,
	rules,
	shouldUnregister,
	defaultValue,
	onChange: propOnChange,
	disabled,
	slotProps,
	...restProps
}: Props<FV, TDate>) => (
	<Controller
		control={control}
		name={name}
		rules={rules}
		shouldUnregister={shouldUnregister}
		defaultValue={defaultValue}
		disabled={disabled}
		render={({
			field: { ref, name, value, onChange, disabled },
			fieldState: { error, invalid }
		}) => (
			<TimePicker
				inputRef={ref}
				name={name}
				value={value ?? null}
				onChange={multiple(onChange, propOnChange)}
				disabled={disabled}
				slotProps={deepmerge(
					{ textField: { helperText: error?.message, error: invalid } },
					slotProps
				)}
				{...restProps}
			/>
		)}
	/>
);
