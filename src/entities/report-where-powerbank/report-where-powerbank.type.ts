import { z } from 'zod';

import { REPORT_WHERE_POWERBANK_NAMES } from './report-where-powerbank.const';
import { reportWherePowerbankFormFiltersSchema } from './report-where-powerbank.zod';

export interface IReportWherePowerbank {
	items: Array<{
		acbUuid: string;
		locator: ReportWherePowerbankLocatorEnum;
		locatorName: string;
		timeDuration: string;
		usageCount: number;
	}>;
}

export enum ReportWherePowerbankLocatorEnum {
	EMPLOYEE = 'EMPLOYEE',
	CLIENT = 'CLIENT',
	CHARGER = 'CHARGER'
}

export type ReportWherePowerbankFormFilters = z.infer<
	typeof reportWherePowerbankFormFiltersSchema
>;

export interface ReportWherePowerbankSearchParams {
	[REPORT_WHERE_POWERBANK_NAMES.locator]: ReportWherePowerbankLocatorEnum;
}
