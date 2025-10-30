import { allOption } from '@/shared/constants/options/all';

import { ReportWherePowerbankLocatorEnum } from './report-where-powerbank.type';
import { getReportWherePowerbankLocatorView } from './report-where-powerbank.view';

export const reportWherePowerbankLocatorOptions = [
	allOption,
	{
		value: ReportWherePowerbankLocatorEnum.EMPLOYEE,
		label: getReportWherePowerbankLocatorView(
			ReportWherePowerbankLocatorEnum.EMPLOYEE
		)
	},
	{
		value: ReportWherePowerbankLocatorEnum.CLIENT,
		label: getReportWherePowerbankLocatorView(
			ReportWherePowerbankLocatorEnum.CLIENT
		)
	},
	{
		value: ReportWherePowerbankLocatorEnum.CHARGER,
		label: getReportWherePowerbankLocatorView(
			ReportWherePowerbankLocatorEnum.CHARGER
		)
	}
];
