import { z } from 'zod';

import { REPORT_BY_PARTNER_NAMES } from './report-by-partner.const';
import { reportByPartnerFormFiltersSchema } from './report-by-partner.zod';

export interface IReportByPartner {
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

export type ReportByPartnerFormFilters = z.infer<
	typeof reportByPartnerFormFiltersSchema
>;

export interface ReportByPartnerSearchParams {
	[REPORT_BY_PARTNER_NAMES.id]: number;
	[REPORT_BY_PARTNER_NAMES.startDate]: string;
	[REPORT_BY_PARTNER_NAMES.endDate]: string;
}
