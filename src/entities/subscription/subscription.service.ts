import { api } from '@/shared/api/api';

class PartnerService {
	private endpoint = 'subscription';

	async create(data: any) {
		return api.post(this.endpoint, data).then(d => d.data);
	}
}

export const partnerService = new PartnerService();
