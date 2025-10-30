import { TextFieldProps } from '@mui/material';
import { deepmerge } from '@mui/utils';
import { PickerValidDate } from '@mui/x-date-pickers';
import {
	DateRangePickerProps,
	DateRangePickerSlotProps,
	DateRangePicker as MUIDateRangePicker
} from '@mui/x-date-pickers-pro';

import { TextField } from '@/ui/TextField';

import { multiple } from '@/shared/utils/functions/multiple';

interface Props<TDate extends PickerValidDate>
	extends Omit<DateRangePickerProps<TDate>, 'label' | 'name' | 'disabled'> {
	fullWidth?: boolean;
	nameStart?: TextFieldProps['name'];
	nameEnd?: TextFieldProps['name'];
	errorStart?: TextFieldProps['error'];
	errorEnd?: TextFieldProps['error'];
	helperTextStart?: TextFieldProps['helperText'];
	helperTextEnd?: TextFieldProps['helperText'];
	disabledStart?: TextFieldProps['disabled'];
	disabledEnd?: TextFieldProps['disabled'];
}

export type { Props as DateRangePickerProps };

export const DateRangePicker = <TDate extends PickerValidDate>({
	fullWidth,
	nameStart,
	nameEnd,
	errorStart,
	errorEnd,
	helperTextStart,
	helperTextEnd,
	disabledStart,
	disabledEnd,
	slotProps,
	onOpen,
	...restProps
}: Props<TDate>) => {
	const handleOpen = () => {
		setTimeout(() => {
			const calendar = document.querySelector('.MuiDateRangeCalendar-root');
			const watermark = calendar?.children[0];

			watermark?.remove();
		}, 0);
	};

	const textFieldProps: DateRangePickerSlotProps<TDate, false>['textField'] = ({
		position
	}) => {
		const isStart = position === 'start';

		return {
			fullWidth,
			name: isStart ? nameStart : nameEnd,
			error: isStart ? errorStart : errorEnd,
			helperText: isStart ? helperTextStart : helperTextEnd,
			disabled: isStart ? disabledStart : disabledEnd
		};
	};

	return (
		<MUIDateRangePicker
			slots={{ textField: TextField }}
			slotProps={deepmerge({ textField: textFieldProps }, slotProps)}
			onOpen={multiple(handleOpen, onOpen)}
			{...restProps}
		/>
	);
};
