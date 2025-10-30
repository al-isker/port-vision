import {
	FILTERS_END_DATE_NAME,
	FILTERS_START_DATE_NAME
} from '@/shared/config/search-params/search-params.names';

export const REPORT_BY_REFERRER_NAMES = {
	id: 'id',
	startDate: FILTERS_START_DATE_NAME,
	endDate: FILTERS_END_DATE_NAME
} as const;
