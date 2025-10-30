import { HTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

import { Typography } from './Typography';

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
	number?: number;
	title: ReactNode;
}

export const FormHeader = ({
	children,
	className,
	number,
	title,
	...restProps
}: Props) => {
	return (
		<header
			className={clsx('flex items-center justify-between', className)}
			{...restProps}
		>
			<Typography variant='h3'>
				{number && <span>{number}. </span>}
				{title}
			</Typography>

			<div className='flex items-center gap-4'>{children}</div>
		</header>
	);
};
