import { api } from '@/shared/api/api';

import {
	IReportByCharger,
	ReportByChargerSearchParams
} from './report-by-charger.type';

class ReportByChargerService {
	private endpoint = 'reports/charger';

	async getByParams(params: ReportByChargerSearchParams) {
		return api
			.get<IReportByCharger>(this.endpoint, { params })
			.then(d => d.data);
	}
}

export const reportByChargerService = new ReportByChargerService();
