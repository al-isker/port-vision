import { DisabledByDefaultRounded } from '@mui/icons-material';
import clsx from 'clsx';

import { Checkbox, CheckboxProps } from '@/smart-ui/checkbox/Checkbox';

interface Props extends Omit<CheckboxProps, 'disableRipple'> {
	checked?: boolean;
}

export const ReadonlyCheckbox = ({
	className,
	checked,
	...restProps
}: Props) => {
	const isSuccess = checked === true;
	const isError = checked === false;

	return (
		<Checkbox
			className={clsx('cursor-auto', className)}
			checked={isSuccess}
			indeterminate={isError}
			indeterminateIcon={<DisabledByDefaultRounded />}
			color={isSuccess ? 'primary' : isError ? 'error' : 'default'}
			disableRipple
			{...restProps}
		/>
	);
};
