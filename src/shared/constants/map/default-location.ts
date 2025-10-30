import { LngLat, YMapLocationRequest } from '@yandex/ymaps3-types';

const MOSCOW_COORDINATES: LngLat = [37.617698, 55.755864];
const DEFAULT_ZOOM = 15;

export const DEFAULT_LOCATION: YMapLocationRequest = {
	center: MOSCOW_COORDINATES,
	zoom: DEFAULT_ZOOM
};
