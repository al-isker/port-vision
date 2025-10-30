import { CheckboxProps, FormControlLabelProps } from '@mui/material';

import { Checkbox as MUICheckbox } from '@/ui/Checkbox';
import { FormControlLabel } from '@/ui/FormControlLabel';

type Props = CheckboxProps &
	Partial<Pick<FormControlLabelProps, 'label' | 'labelPlacement'>>;

export type { Props as CheckboxProps };

export const Checkbox = ({ label, labelPlacement, ...restProps }: Props) => {
	if (label) {
		return (
			<FormControlLabel
				label={label}
				labelPlacement={labelPlacement}
				required={restProps.required}
				disabled={restProps.disabled}
				control={<MUICheckbox {...restProps} />}
			/>
		);
	}

	return <MUICheckbox {...restProps} />;
};
