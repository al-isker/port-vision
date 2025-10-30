import { deepmerge } from '@mui/utils';
import {
	DatePickerProps,
	DatePicker as MUIDatePicker,
	PickerValidDate
} from '@mui/x-date-pickers';

import { TextField } from '@/ui/TextField';

interface Props<TDate extends PickerValidDate> extends DatePickerProps<TDate> {
	fullWidth?: boolean;
}

export type { Props as DatePickerProps };

export const DatePicker = <TDate extends PickerValidDate>({
	fullWidth,
	slotProps,
	...restProps
}: Props<TDate>) => {
	return (
		<MUIDatePicker
			slots={{ textField: TextField }}
			slotProps={deepmerge({ textField: { fullWidth } }, slotProps)}
			{...restProps}
		/>
	);
};
