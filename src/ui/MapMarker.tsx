import { ReactNode } from 'react';

import clsx from 'clsx';

interface Props {
	className?: string;
	children: ReactNode;
	onClick?: () => void;
}

export const MapMarker = ({ className, children, onClick }: Props) => {
	return (
		<div
			className={clsx(
				'-translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white/60 shadow-mui-4',
				className
			)}
			onClick={onClick}
		>
			<div className='z-50 box-content flex size-10 items-center justify-center rounded-full bg-primary text-lg font-medium text-white'>
				{children}
			</div>
		</div>
	);
};
