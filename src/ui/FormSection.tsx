import clsx from 'clsx';

import { Paper, PaperProps } from './Paper';

interface Props extends PaperProps {}

export const FormSection = ({ className, ...props }: Props) => {
	return <Paper className={clsx('space-y-space-sm', className)} {...props} />;
};
