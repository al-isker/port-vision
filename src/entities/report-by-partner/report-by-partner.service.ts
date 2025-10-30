import { api } from '@/shared/api/api';

import {
	IReportByPartner,
	ReportByPartnerSearchParams
} from './report-by-partner.type';

class ReportByPartnerService {
	private endpoint = 'reports/partner';

	async getByParams(params: ReportByPartnerSearchParams) {
		return api
			.get<IReportByPartner>(this.endpoint, { params })
			.then(d => d.data);
	}
}

export const reportByPartnerService = new ReportByPartnerService();
