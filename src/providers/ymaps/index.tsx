'use client';

import Script from 'next/script';
import React, { ReactNode } from 'react';

import ReactDOM from 'react-dom';

import { YMAPS_API_KEY } from '@/shared/config/environments/environments';
import { useYmapsStore } from '@/shared/store/ymaps/use-ymaps-store';

export const YmapsProvider = ({ children }: { children: ReactNode }) => {
	const setYmaps = useYmapsStore(state => state.setYmaps);

	const ymapsSrc = `https://api-maps.yandex.ru/v3/?apikey=${YMAPS_API_KEY}&lang=ru_RU`;

	const handleLoad = async () => {
		const [ymaps3React] = await Promise.all([
			ymaps3.import('@yandex/ymaps3-reactify'),
			ymaps3.ready
		]);

		const reactify = ymaps3React.reactify.bindTo(React, ReactDOM);

		const Ymaps = reactify.module(ymaps3);

		const YmapsClusterer = reactify.module(
			await import('@yandex/ymaps3-clusterer')
		);
		const YmapsTheme = reactify.module(
			await import('@yandex/ymaps3-default-ui-theme')
		);

		setYmaps(Object.assign(Ymaps, YmapsClusterer, YmapsTheme));
	};

	return (
		<>
			{YMAPS_API_KEY && <Script src={ymapsSrc} onLoad={handleLoad} />}
			{children}
		</>
	);
};
