import { api } from '@/shared/api/api';

import {
	IReportByReferrer,
	ReportByReferrerSearchParams
} from './report-by-referrer.type';

class ReportByReferrerService {
	private endpoint = 'reports/referrer';

	async getByParams(params: ReportByReferrerSearchParams) {
		return api
			.get<IReportByReferrer>(this.endpoint, { params })
			.then(d => d.data);
	}
}

export const reportByReferrerService = new ReportByReferrerService();
