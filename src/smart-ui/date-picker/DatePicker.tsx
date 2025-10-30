import { useEffect, useState } from 'react';

import { PickerValidDate } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';

import { DatePickerProps, DatePicker as MUIDatePicker } from '@/ui/DatePicker';

import { isEmpty } from '@/shared/utils/checks/is-empty';
import { DateConverter } from '@/shared/utils/converters/date-converter';

type PropsValueType = string | null;

type Props<TDate extends PickerValidDate> = Omit<
	DatePickerProps<TDate>,
	'value' | 'onChange'
> & {
	value?: PropsValueType;
	onChange?: (value: PropsValueType) => void;
};

export type { Props as DatePickerProps, PickerValidDate };

export const DatePicker = <TDate extends PickerValidDate>({
	value: propsValue,
	onChange: propsOnChange,
	...restProps
}: Props<TDate>) => {
	type DayjsValueType = Dayjs | null;

	const convertPropsValue = (propsValue?: PropsValueType) => {
		if (!isEmpty(propsValue)) {
			return DateConverter.JSONToDayjs(propsValue!);
		}

		return propsValue as null | undefined;
	};

	const [dayjsValue, setDayjsValue] = useState<DayjsValueType | undefined>(
		convertPropsValue(propsValue)
	);

	const handleChange = (value: DayjsValueType) => {
		setDayjsValue(value);

		propsOnChange?.(value ? DateConverter.dayjsToJSON(value) : value);
	};

	useEffect(() => {
		setDayjsValue(convertPropsValue(propsValue));
	}, [propsValue]);

	return (
		<MUIDatePicker
			value={dayjsValue as TDate}
			onChange={handleChange}
			{...restProps}
		/>
	);
};
