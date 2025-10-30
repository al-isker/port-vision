import Link from 'next/link';
import { ReactElement, ReactNode } from 'react';

import { ButtonBase, ButtonBaseProps, Collapse } from '@mui/material';
import clsx from 'clsx';

interface Props
	extends Omit<ButtonBaseProps, 'children' | 'title' | 'LinkComponent'> {
	size?: 'medium' | 'small';
	href?: string;
	title?: ReactNode;
	startIcon?: ReactElement;
	endIcon?: ReactElement;
	active?: boolean;
	open?: boolean;
}

export const NavigationItem = ({
	className,
	size = 'medium',
	href,
	title,
	startIcon,
	endIcon,
	active,
	open,
	...restProps
}: Props) => {
	const isMedium = size === 'medium';
	const isSmall = size === 'small';

	const iconClassName = clsx('text-[inherit]', {
		'scale-[0.85]': isSmall,
		'opacity-85': !active && isSmall
	});

	return (
		<ButtonBase
			className={clsx(
				'flex w-full justify-start rounded px-space-sm transition-colors duration-150',
				{
					'text-black/60 hover:bg-black/10': !active,
					'bg-primary/15 text-primary': active,
					'py-1.5': isMedium,
					'py-1 text-[0.9rem]': isSmall
				},
				className
			)}
			{...(href && { LinkComponent: Link, href })}
			{...restProps}
		>
			{startIcon && <span className={iconClassName}>{startIcon}</span>}

			<Collapse
				className='flex-grow'
				classes={{ wrapperInner: 'flex-grow' }}
				in={open}
				orientation='horizontal'
			>
				<div className='ml-space-sm flex justify-between'>
					<span className='text-nowrap font-medium'>{title}</span>

					{endIcon && <span className={iconClassName}>{endIcon}</span>}
				</div>
			</Collapse>
		</ButtonBase>
	);
};
