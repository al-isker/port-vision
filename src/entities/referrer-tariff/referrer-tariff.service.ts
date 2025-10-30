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
	IReferrerTariff,
	ReferrerTariffFormCreate,
	ReferrerTariffFormUpdate
} from './referrer-tariff.type';

class ReferrerTariffService {
	private endpoint = 'referrer_tariff';

	async getAll(params?: SearchParamsForGetAll) {
		return api
			.get<Pagination<IReferrerTariff[]>>(this.endpoint, {
				params: getSearchParamsForGetAll(params)
			})
			.then(d => d.data.content);
	}

	async getPagination(params: SearchParamsForGetPagination) {
		return api
			.get<Pagination<IReferrerTariff[]>>(this.endpoint, {
				params: getSearchParamsForGetPagination(params)
			})
			.then(d => d.data);
	}

	async getById(id: number) {
		return api.get<IReferrerTariff>(`${this.endpoint}/${id}`).then(d => d.data);
	}

	async create(data: ReferrerTariffFormCreate) {
		return api.post<IReferrerTariff>(this.endpoint, data).then(d => d.data);
	}

	async update(id: number, data: ReferrerTariffFormUpdate) {
		return api
			.put<IReferrerTariff>(`${this.endpoint}/${id}`, data)
			.then(d => d.data);
	}

	async delete(id: number) {
		return api.delete<void>(`${this.endpoint}/${id}`).then(d => d.data);
	}
}

export const referrerTariffService = new ReferrerTariffService();
