import { dateShortcut } from '@/shared/constants/date/date-shortcut';

export const PAGINATION_PAGE_DEFAULT = 0;

export const PAGINATION_OFFSET_DEFAULT = 10;
export const PAGINATION_OFFSET_MAX = 2147483647;

export enum SortDirectionEnum {
	ASC = 'ASC',
	DESC = 'DESC'
}

export const [FILTERS_START_DATE_DEFAULT, FILTERS_END_DATE_DEFAULT] =
	dateShortcut.rangeToday().JSON;
