'use client';

import Link from 'next/link';

import clsx from 'clsx';

import { Typography } from '@/ui/Typography';

import { ROUTES } from '@/shared/config/routes/routes';
import { useSidebarStore } from '@/shared/store/sidebar/use-sidebar-store';

export const HeaderRootLink = () => {
	const { isOpen } = useSidebarStore();

	return (
		<Link
			className={clsx('transition-[margin] duration-300', {
				'ml-space-sm': !isOpen
			})}
			href={ROUTES.port()}
		>
			<Typography className='max-md:!text-[1.6rem]' variant='h1'>
				Port Vision
			</Typography>
		</Link>
	);
};
