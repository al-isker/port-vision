import axios from 'axios';

import { YMAPS_API_KEY } from '../config/environments/environments';
import { API_TIMEOUT } from './config';

export const geocoderApi = axios.create({
	baseURL: 'https://geocode-maps.yandex.ru/1.x',
	timeout: API_TIMEOUT,
	params: {
		apikey: YMAPS_API_KEY,
		format: 'json'
	}
});
