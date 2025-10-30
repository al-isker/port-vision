import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { SIDEBAR_KEY } from '@/shared/config/local-storage/local-storage.keys';

interface SidebarStore {
	isOpen: boolean;
	open: () => void;
	close: () => void;
	toggle: () => void;
}

export const useSidebarStore = create<SidebarStore>()(
	persist(
		set => ({
			isOpen: false,
			open: () => set({ isOpen: true }),
			close: () => set({ isOpen: false }),
			toggle: () => set(prev => ({ isOpen: !prev.isOpen }))
		}),
		{ name: SIDEBAR_KEY }
	)
);
