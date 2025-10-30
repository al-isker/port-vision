import { ReactNode } from 'react';

import { isEmpty } from '@/shared/utils/checks/is-empty';

interface Props {
	children?: ReactNode;
	label: ReactNode;
}

export const MapViewRow = ({ children, label }: Props) => {
	return (
		<div className='flex min-w-52 items-center justify-between gap-8 text-[0.95rem]'>
			<span className='text-black/60'>{label}</span>
			<div className='text-right'>
				{isEmpty(children) ? (
					<span className='text-black/50'>пусто</span>
				) : (
					children
				)}
			</div>
		</div>
	);
};
