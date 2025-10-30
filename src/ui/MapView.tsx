import { HTMLAttributes } from 'react';

import clsx from 'clsx';

import { Divider } from './Divider';
import { Typography } from './Typography';

interface Props extends HTMLAttributes<HTMLDivElement> {
	title?: string;
	innerClassName?: string;
}

export const MapView = ({
	children,
	title,
	innerClassName,
	...restProps
}: Props) => {
	return (
		<div {...restProps}>
			{title && (
				<>
					<Typography className='mb-1' variant='h3'>
						{title}
					</Typography>
					<Divider className='mb-3' />
				</>
			)}
			<div className={clsx('space-y-1.5', innerClassName)}>{children}</div>
		</div>
	);
};
