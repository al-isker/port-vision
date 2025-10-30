import { deepmerge } from '@mui/utils';
import {
	TimePicker as MUITimePicker,
	PickerValidDate,
	TimePickerProps
} from '@mui/x-date-pickers';

import { TextField } from '@/ui/TextField';

interface Props<TDate extends PickerValidDate> extends TimePickerProps<TDate> {
	fullWidth?: boolean;
}

export type { Props as TimePickerProps };

export const TimePicker = <TDate extends PickerValidDate>({
	fullWidth,
	slotProps,
	...restProps
}: Props<TDate>) => {
	return (
		<MUITimePicker
			slots={{ textField: TextField }}
			slotProps={deepmerge({ textField: { fullWidth } }, slotProps)}
			ampm={false}
			{...restProps}
		/>
	);
};
