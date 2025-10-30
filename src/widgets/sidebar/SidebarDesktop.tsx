'use client';

import { Paper } from '@/ui/Paper';

import { useSidebarStore } from '@/shared/store/sidebar/use-sidebar-store';

import { Navigation } from './navigation/Navigation';

export const SidebarDesktop = () => {
	const isOpen = useSidebarStore(state => state.isOpen);

	return (
		<Paper className='rounded-none' component='aside' disablePadding>
			<Navigation open={isOpen} />
		</Paper>
	);
};
