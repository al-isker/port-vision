import { LngLat, LngLatBounds } from '@yandex/ymaps3-types';

export const getBoundsByCoordinates = (coordinates: LngLat[]) => {
	if (!coordinates.length) return;

	const lngCoordinates = new Array(coordinates.length);
	const latCoordinates = new Array(coordinates.length);

	coordinates.forEach(([lng, lat], i) => {
		lngCoordinates[i] = lng;
		latCoordinates[i] = lat;
	});

	const minLng = Math.min(...lngCoordinates);
	const maxLng = Math.max(...lngCoordinates);

	const minLat = Math.min(...latCoordinates);
	const maxLat = Math.max(...latCoordinates);

	const bounds: LngLatBounds = [
		[minLng / 1.001, minLat / 1.001],
		[maxLng * 1.001, maxLat * 1.001]
	];

	return bounds;
};
