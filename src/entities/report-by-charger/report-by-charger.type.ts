import { z } from 'zod';

import { allOption } from '@/shared/constants/options/all';

import { REPORT_BY_CHARGER_NAMES } from './report-by-charger.const';
import { reportByChargerFormFiltersSchema } from './report-by-charger.zod';

export interface IReportByCharger {
	items: Array<{
		id: number;
		name: string;
		rentAmount: number;
		paymentsSum: number;
		partnerCommission: number;
		referrerCommission: number;
		income: number;
	}>;

	totalRentAmount: number;
	totalPayments: number;
	totalPartnerCommission: number;
	totalReferrerCommission: number;
	totalIncome: number;
}

export type ReportByChargerFormFilters = z.infer<
	typeof reportByChargerFormFiltersSchema
>;

export interface ReportByChargerSearchParams {
	[REPORT_BY_CHARGER_NAMES.id]: number | typeof allOption.value;
	[REPORT_BY_CHARGER_NAMES.startDate]: string;
	[REPORT_BY_CHARGER_NAMES.endDate]: string;
}
