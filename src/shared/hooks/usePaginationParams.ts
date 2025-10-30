'use client';

import { PAGINATION_PAGE_NAME } from '../config/search-params/search-params.names';
import { useGetSearchParams } from './useGetSearchParams';

export const usePaginationParams = () => {
	const { page } = useGetSearchParams(PAGINATION_PAGE_NAME);

	return {
		page: page ? Number(page) : null
	};
};
