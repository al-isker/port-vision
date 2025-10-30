import { z } from 'zod';

import { REPORT_BY_REFERRER_NAMES } from './report-by-referrer.const';
import { reportByReferrerFormFiltersSchema } from './report-by-referrer.zod';

export interface IReportByReferrer {
	items: Array<{
		date: string;
		initialBalance: number;
		commissionSum: number;
		payoutSum: number;
		finalBalance: number;
	}>;

	totalCommission: number;
	totalPayout: number;
}

export type ReportByReferrerFormFilters = z.infer<
	typeof reportByReferrerFormFiltersSchema
>;

export interface ReportByReferrerSearchParams {
	[REPORT_BY_REFERRER_NAMES.id]: number;
	[REPORT_BY_REFERRER_NAMES.startDate]: string;
	[REPORT_BY_REFERRER_NAMES.endDate]: string;
}
