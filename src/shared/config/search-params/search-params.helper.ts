import {
	SearchParamsForGetAll,
	SearchParamsForGetPagination
} from '@/shared/types/search-params';

import {
	PAGINATION_OFFSET_DEFAULT,
	PAGINATION_OFFSET_MAX,
	PAGINATION_PAGE_DEFAULT
} from './search-params.values';

export const getSearchParamsForGetAll = (
	params: SearchParamsForGetAll = {}
) => {
	return Object.assign(params, {
		page: PAGINATION_PAGE_DEFAULT,
		offset: PAGINATION_OFFSET_MAX
	});
};

export const getSearchParamsForGetPagination = (
	params: SearchParamsForGetPagination
) => {
	return Object.assign(params, {
		offset: PAGINATION_OFFSET_DEFAULT
	});
};
