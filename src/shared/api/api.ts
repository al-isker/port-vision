'use client';

import axios from 'axios';

import { API_HEADERS, API_TIMEOUT, API_URL } from './config';

export const api = axios.create({
	baseURL: API_URL,
	timeout: API_TIMEOUT,
	headers: API_HEADERS
});
