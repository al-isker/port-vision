import { ReportWherePowerbankLocatorEnum } from './report-where-powerbank.type';

const reportWherePowerbankLocatorMapView = {
	[ReportWherePowerbankLocatorEnum.EMPLOYEE]: 'Сотрудник',
	[ReportWherePowerbankLocatorEnum.CLIENT]: 'Клиент',
	[ReportWherePowerbankLocatorEnum.CHARGER]: 'Зарядное устройство'
};

export const getReportWherePowerbankLocatorView = (
	reportWherePowerbankLocator?: ReportWherePowerbankLocatorEnum
) => {
	return reportWherePowerbankLocator
		? reportWherePowerbankLocatorMapView[reportWherePowerbankLocator]
		: null;
};
