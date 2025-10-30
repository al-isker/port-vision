import { CircularProgress, Fade } from '@mui/material';
import clsx from 'clsx';

import { Paper, PaperProps } from './Paper';

interface Props extends PaperProps {
	loading?: boolean;
}

export const PaperLoading = ({
	children,
	className,
	loading,
	...restProps
}: Props) => (
	<Paper className={clsx('relative', className)} {...restProps}>
		<Fade in={loading} appear={false} unmountOnExit>
			<div className='absolute left-0 top-0 flex h-full w-full'>
				<CircularProgress className='m-auto block' size={24} />
			</div>
		</Fade>

		{!loading && children}
	</Paper>
);
