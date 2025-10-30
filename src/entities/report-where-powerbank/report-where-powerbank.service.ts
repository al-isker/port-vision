import { api } from '@/shared/api/api';

import {
	IReportWherePowerbank,
	ReportWherePowerbankSearchParams
} from './report-where-powerbank.type';

class ReportWherePowerbankService {
	private endpoint = 'reports/acb_location';

	async getByParams(params: ReportWherePowerbankSearchParams) {
		return api
			.get<IReportWherePowerbank>(this.endpoint, { params })
			.then(d => d.data);
	}
}

export const reportWherePowerbankService = new ReportWherePowerbankService();
