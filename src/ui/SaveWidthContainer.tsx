import { ReactElement, ReactNode, cloneElement } from 'react';

import clsx from 'clsx';

interface Props {
	children: ReactNode;
	frontSlot: ReactElement<HTMLElement>;
	showFront?: boolean;
	className?: string;
}

export const SaveWidthContainer = ({
	children,
	frontSlot,
	showFront,
	className
}: Props) => {
	return (
		<div className={clsx('relative h-full w-full', className)}>
			<div className={clsx({ 'opacity-0': showFront })}>{children}</div>

			<div className='absolute left-0 top-0 h-full w-full'>
				{showFront &&
					cloneElement(frontSlot, {
						className: clsx('h-full w-full', frontSlot.props.className)
					})}
			</div>
		</div>
	);
};
