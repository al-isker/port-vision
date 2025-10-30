import { useState } from 'react';

import { composeRefs } from '@radix-ui/react-compose-refs';
import { Dayjs } from 'dayjs';
import {
	FieldValues,
	UseControllerProps,
	useController
} from 'react-hook-form';

import { Select, SelectProps } from '@/smart-ui/select/Select';

import { dateRangeShortcutOptions } from '@/shared/constants/options/date-range-shortcut';
import { DateConverter } from '@/shared/utils/converters/date-converter';

import {
	DateRangePicker,
	DateRangePickerProps,
	PickerValidDate
} from './DateRangePicker';

type Props<FV extends FieldValues, TDate extends PickerValidDate> = Omit<
	UseControllerProps<FV>,
	'name'
> & {
	nameStart: UseControllerProps<FV>['name'];
	nameEnd: UseControllerProps<FV>['name'];
	dateRangePickerProps?: Omit<
		DateRangePickerProps<TDate>,
		| 'inputRef'
		| 'nameStart'
		| 'nameEnd'
		| 'value'
		| 'defaultValue'
		| 'onChange'
		| 'disabledStart'
		| 'disabledEnd'
	>;
	selectProps?: Omit<
		SelectProps,
		| 'inputRef'
		| 'name'
		| 'options'
		| 'value'
		| 'defaultValue'
		| 'onChange'
		| 'disabled'
	>;
};

export const RHFDateRangePickerWithShortcuts = <
	FV extends FieldValues,
	TDate extends PickerValidDate
>({
	control,
	nameStart,
	nameEnd,
	rules,
	shouldUnregister,
	defaultValue,
	disabled,
	dateRangePickerProps,
	selectProps
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

	const findShortcut = (
		startDateJSONValue: string,
		endDateJSONValue: string
	) => {
		const startDateDayjsValue = DateConverter.JSONToDayjs(startDateJSONValue);

		const endDateDayjsValue = DateConverter.JSONToDayjs(endDateJSONValue);

		const sameShortcutOption = dateRangeShortcutOptions.find(option => {
			if (option.value !== 'none') {
				const [startDateOptionDayjsValue, endDateOptionDayjsValue] =
					option.value.map(DateConverter.JSONToDayjs);

				return (
					startDateDayjsValue.isSame(startDateOptionDayjsValue, 'day') &&
					endDateDayjsValue.isSame(endDateOptionDayjsValue, 'day')
				);
			}
		});

		return sameShortcutOption?.value ?? 'none';
	};

	type shortcutType = (typeof dateRangeShortcutOptions)[number]['value'];

	const [shortcut, setShortcut] = useState<shortcutType | undefined>(
		findShortcut(start.field.value, end.field.value)
	);

	const handleRangeChange: DateRangePickerProps<Dayjs>['onChange'] = ([
		startValue,
		endValue
	]) => {
		start.field.onChange(startValue);
		end.field.onChange(endValue);

		if (startValue && endValue) {
			setShortcut(findShortcut(startValue, endValue));
		}
	};

	const handleSelectShortcutChange: SelectProps['onChange'] = e => {
		const value = e.target.value as shortcutType;

		setShortcut(value);

		if (value !== 'none') {
			start.field.onChange(value[0]);
			end.field.onChange(value[1]);
		}
	};

	return (
		<>
			<DateRangePicker
				inputRef={composeRefs(start.field.ref, end.field.ref)}
				value={[start.field.value, end.field.value]}
				nameStart={start.field.name}
				nameEnd={end.field.name}
				helperTextStart={start.fieldState.error?.message}
				helperTextEnd={end.fieldState.error?.message}
				onChange={handleRangeChange}
				errorStart={start.fieldState.invalid}
				errorEnd={end.fieldState.invalid}
				disabledStart={start.field.disabled}
				disabledEnd={end.field.disabled}
				{...dateRangePickerProps}
			/>

			<Select
				label='Диапазон'
				options={dateRangeShortcutOptions}
				name='shortcut'
				value={shortcut ?? ''}
				onChange={handleSelectShortcutChange}
				disabled={start.field.disabled || end.field.disabled}
				{...selectProps}
			/>
		</>
	);
};
