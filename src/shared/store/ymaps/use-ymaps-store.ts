import { ReactifiedModule } from '@yandex/ymaps3-types/reactify';
import { create } from 'zustand';

export type YmapsType = ReactifiedModule<
	typeof import('@yandex/ymaps3-types')
> &
	ReactifiedModule<typeof import('@yandex/ymaps3-clusterer')> &
	ReactifiedModule<typeof import('@yandex/ymaps3-default-ui-theme')>;

export interface YmapsStore {
	Ymaps: YmapsType | null;
	setYmaps: (Ymaps: YmapsType) => void;
}

export const useYmapsStore = create<YmapsStore>(set => ({
	Ymaps: null,
	setYmaps: Ymaps => set({ Ymaps })
}));
