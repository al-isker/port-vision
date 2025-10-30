import { ListItemTextProps } from '@mui/material';

import { Checkbox, CheckboxProps } from '@/smart-ui/checkbox/Checkbox';

import { ListItem } from '@/ui/ListItem';
import { ListItemText } from '@/ui/ListItemText';

interface Props {
	primaryText: ListItemTextProps['primary'];
	secondaryText?: ListItemTextProps['secondary'];
	checked: CheckboxProps['checked'];
	onChange: CheckboxProps['onChange'];
	disabled?: boolean;
}

export const BindChargersToEmployeeUpdateFormSchemaListItem = ({
	primaryText,
	secondaryText,
	checked,
	onChange,
	disabled
}: Props) => {
	return (
		<ListItem
			secondaryAction={
				<Checkbox checked={checked} onChange={onChange} disabled={disabled} />
			}
			disablePadding
			disableGutters
			dense
		>
			<ListItemText primary={primaryText} secondary={secondaryText} />
		</ListItem>
	);
};
