'use client';

import { ReactNode, useMemo } from 'react';

import { MapMarker } from '@/ui/MapMarker';

import { useYmapsStore } from '@/shared/store/ymaps/use-ymaps-store';

interface Props {
	data: Array<{
		[key: string]: any;
		latitude: number;
		longitude: number;
	}>;
	markerSlot: (data: any) => ReactNode;
}

export const YMapPointClusterer = ({ data, markerSlot }: Props) => {
	const { Ymaps } = useYmapsStore();

	const method = useMemo(() => {
		if (Ymaps) {
			// @ts-ignore
			return Ymaps.clusterByGrid({ gridSize: 78 });
		}
	}, [Ymaps]);

	if (Ymaps) {
		return (
			<Ymaps.YMapClusterer
				features={data.map((item, index) => ({
					id: String(index),
					type: 'Feature',
					properties: item,
					geometry: {
						coordinates: [item.longitude, item.latitude],
						type: 'Point'
					}
				}))}
				method={method}
				cluster={(coordinates, features) => (
					<Ymaps.YMapMarker coordinates={coordinates}>
						<MapMarker>{features.length}</MapMarker>
					</Ymaps.YMapMarker>
				)}
				marker={feature => (
					<Ymaps.YMapMarker
						blockBehaviors
						coordinates={feature.geometry.coordinates}
					>
						{markerSlot(feature.properties)}
					</Ymaps.YMapMarker>
				)}
			/>
		);
	}
};
