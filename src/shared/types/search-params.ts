import {
	PAGINATION_PAGE_NAME,
	SORT_DIRECTION_NAME
} from '../config/search-params/search-params.names';
import { SortDirectionEnum } from '../config/search-params/search-params.values';

interface SortSearchParams {
	[SORT_DIRECTION_NAME]?: SortDirectionEnum;
}

interface PaginationSearchParams {
	[PAGINATION_PAGE_NAME]: number;
}

export type SearchParamsForGetAll = SortSearchParams;

export type SearchParamsForGetPagination = SortSearchParams &
	PaginationSearchParams;
