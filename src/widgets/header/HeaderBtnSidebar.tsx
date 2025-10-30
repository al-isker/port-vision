'use client';

import { Menu, MenuOpen } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import { useSidebarStore } from '@/shared/store/sidebar/use-sidebar-store';

export const HeaderBtnSidebar = () => {
	const { isOpen, toggle } = useSidebarStore();

	return (
		<IconButton className='p-space-sm' color='inherit' onClick={toggle}>
			{isOpen ? (
				<MenuOpen className='scale-110' fontSize='inherit' />
			) : (
				<Menu className='scale-110' fontSize='inherit' />
			)}
		</IconButton>
	);
};
