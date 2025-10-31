'use client';

import { Paper as MUIPaper, PaperProps } from '@mui/material';
import { deepmerge } from '@mui/utils';
import clsx from 'clsx';

interface Props extends PaperProps {
	disablePadding?: boolean;
	disableMinHeight?: boolean;
}

export const Paper = ({
	sx,
	className,
	disablePadding,
	disableMinHeight,
	...restProps
}: Props) => (
	<MUIPaper
		sx={deepmerge(
			{
				boxShadow: 'none',
				backgroundImage: 'none',
				...(disableMinHeight
					? {}
					: {
							boxSizing: 'content-box',
							minHeight: '2.5rem',
							'& > *': {
								boxSizing: 'border-box'
							}
						})
			},
			sx
		)}
		className={clsx('shadow-lg', className, {
			'gap-space-sm p-space-sm': !disablePadding
		})}
		{...restProps}
	/>
);

export type { Props as PaperProps };
