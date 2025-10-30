'use client';

import { ComponentProps, useRef } from 'react';

import { MapEventUpdateHandler } from '@yandex/ymaps3-types';

import { YmapsType, useYmapsStore } from '@/shared/store/ymaps/use-ymaps-store';

type YMapProps = ComponentProps<YmapsType['YMap']>;

interface Props extends YMapProps {
	defaultZoom?: number;
}

export const YMapWithSavedZoom = ({
	children,
	defaultZoom,
	location,
	...props
}: Props) => {
	const { Ymaps } = useYmapsStore();

	const zoomRef = useRef(defaultZoom ?? 20);

	const handleUpdate: MapEventUpdateHandler = e => {
		zoomRef.current = e.location.zoom;
	};

	if (Ymaps) {
		return (
			<Ymaps.YMap location={{ zoom: zoomRef.current, ...location }} {...props}>
				{children}
				<Ymaps.YMapListener onUpdate={handleUpdate} />
			</Ymaps.YMap>
		);
	}
};
