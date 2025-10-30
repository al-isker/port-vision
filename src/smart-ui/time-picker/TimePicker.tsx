import { useEffect, useState } from 'react';

import { PickerValidDate } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';

import { TimePicker as MUITimePicker, TimePickerProps } from '@/ui/TimePicker';

import { isEmpty } from '@/shared/utils/checks/is-empty';
import { DateConverter } from '@/shared/utils/converters/date-converter';

type PropsValueType = string | null;

type Props<TDate extends PickerValidDate> = Omit<
	TimePickerProps<TDate>,
	'value' | 'onChange'
> & {
	value?: PropsValueType;
	onChange?: (value: PropsValueType) => void;
	onlyTime?: boolean;
};

export type { PickerValidDate, Props as TimePickerProps };

export const TimePicker = <TDate extends PickerValidDate>({
	value: propsValue,
	onChange: propsOnChange,
	onlyTime,
	...restProps
}: Props<TDate>) => {
	type DayjsValueType = Dayjs | null;

	const convertPropsValue = (propsValue?: PropsValueType) => {
		if (!isEmpty(propsValue)) {
			return onlyTime
				? DateConverter.JSONTimeToDayjs(propsValue!)
				: DateConverter.JSONToDayjs(propsValue!);
		}

		return propsValue as null | undefined;
	};

	const [dayjsValue, setDayjsValue] = useState<DayjsValueType | undefined>(
		convertPropsValue(propsValue)
	);

	const handleChange = (value: DayjsValueType) => {
		setDayjsValue(value);

		if (propsOnChange) {
			if (value?.isValid()) {
				propsOnChange(
					onlyTime
						? DateConverter.dayjsToJSONTime(value!)
						: DateConverter.dayjsToJSON(value!)
				);
			} else {
				propsOnChange(null);
			}
		}
	};

	useEffect(() => {
		setDayjsValue(convertPropsValue(propsValue));
	}, [propsValue]);

	return (
		<MUITimePicker
			value={dayjsValue as TDate}
			onChange={handleChange}
			{...restProps}
		/>
	);
};
