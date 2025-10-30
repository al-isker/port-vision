import { useEffect, useState } from 'react';

import { PickerValidDate } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';

import {
	DateRangePickerProps,
	DateRangePicker as MUIDateRangePicker
} from '@/ui/DateRangePicker';

import { DateConverter } from '@/shared/utils/converters/date-converter';

type PropsValueType = [string | null, string | null];

type Props<TDate extends PickerValidDate> = Omit<
	DateRangePickerProps<TDate>,
	'value' | 'onChange'
> & {
	value?: PropsValueType;
	onChange?: (value: PropsValueType) => void;
};

export type { Props as DateRangePickerProps, PickerValidDate };

export const DateRangePicker = <TDate extends PickerValidDate>({
	value: propsValue,
	onChange: propsOnChange,
	...restProps
}: Props<TDate>) => {
	type DayjsValueTuple = [Dayjs | null, Dayjs | null];

	const convertPropsValue = (propsValue?: PropsValueType) => {
		if (propsValue) {
			const [propsStartValue, propsEndValue] = propsValue ?? [];

			return [
				propsStartValue ? DateConverter.JSONToDayjs(propsStartValue!) : null,
				propsEndValue ? DateConverter.JSONToDayjs(propsEndValue!) : null
			] as DayjsValueTuple;
		}
	};

	const [dayjsValue, setDayjsValue] = useState<DayjsValueTuple | undefined>(
		convertPropsValue(propsValue)
	);

	const handleChange = (value: DayjsValueTuple) => {
		setDayjsValue(value);

		const [startValue, endValue] = value;

		propsOnChange?.([
			startValue ? DateConverter.dayjsToJSON(startValue) : null,
			endValue ? DateConverter.dayjsToJSON(endValue) : null
		]);
	};

	useEffect(() => {
		setDayjsValue(convertPropsValue(propsValue));
	}, propsValue);

	return (
		<MUIDateRangePicker
			value={dayjsValue as [TDate, TDate]}
			onChange={handleChange}
			{...restProps}
		/>
	);
};
