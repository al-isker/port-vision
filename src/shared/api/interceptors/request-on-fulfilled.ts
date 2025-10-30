import { InternalAxiosRequestConfig } from 'axios';

import { ACCESS_TOKEN_KEY } from '@/shared/config/local-storage/local-storage.keys';

export const requestOnFulfilled = (request: InternalAxiosRequestConfig) => {
	const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

	request.headers.Authorization = `Bearer ${accessToken}`;

	return request;
};
