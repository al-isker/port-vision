import { api } from '@/shared/api/api';
import {
	getSearchParamsForGetAll,
	getSearchParamsForGetPagination
} from '@/shared/config/search-params/search-params.helper';
import { Pagination } from '@/shared/types/pagination';
import {
	SearchParamsForGetAll,
	SearchParamsForGetPagination
} from '@/shared/types/search-params';

import {
	IPartnerTariff,
	PartnerTariffFormCreate,
	PartnerTariffFormUpdate
} from './partner-tariff.type';

class PartnerTariffService {
	private endpoint = 'partner_tariff';

	async getAll(params?: SearchParamsForGetAll) {
		return api
			.get<Pagination<IPartnerTariff[]>>(this.endpoint, {
				params: getSearchParamsForGetAll(params)
			})
			.then(d => d.data.content);
	}

	async getPagination(params: SearchParamsForGetPagination) {
		return api
			.get<Pagination<IPartnerTariff[]>>(this.endpoint, {
				params: getSearchParamsForGetPagination(params)
			})
			.then(d => d.data);
	}

	async getById(id: number) {
		return api.get<IPartnerTariff>(`${this.endpoint}/${id}`).then(d => d.data);
	}

	async create(data: PartnerTariffFormCreate) {
		return api.post<IPartnerTariff>(this.endpoint, data).then(d => d.data);
	}

	async update(id: number, data: PartnerTariffFormUpdate) {
		return api
			.put<IPartnerTariff>(`${this.endpoint}/${id}`, data)
			.then(d => d.data);
	}

	async delete(id: number) {
		return api.delete<void>(`${this.endpoint}/${id}`).then(d => d.data);
	}
}

export const partnerTariffService = new PartnerTariffService();
