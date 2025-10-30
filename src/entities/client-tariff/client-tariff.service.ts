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
	ClientTariffFormCreate,
	ClientTariffFormUpdate,
	IClientTariff
} from './client-tariff.type';

class ClientTariffService {
	private endpoint = 'client_tariff';

	async getAll(params?: SearchParamsForGetAll) {
		return api
			.get<Pagination<IClientTariff[]>>(this.endpoint, {
				params: getSearchParamsForGetAll(params)
			})
			.then(d => d.data.content);
	}

	async getPagination(params: SearchParamsForGetPagination) {
		return api
			.get<Pagination<IClientTariff[]>>(this.endpoint, {
				params: getSearchParamsForGetPagination(params)
			})
			.then(d => d.data);
	}

	async getById(id: number) {
		return api.get<IClientTariff>(`${this.endpoint}/${id}`).then(d => d.data);
	}

	async create(data: ClientTariffFormCreate) {
		return api.post<IClientTariff>(this.endpoint, data).then(d => d.data);
	}

	async update(id: number, data: ClientTariffFormUpdate) {
		return api
			.put<IClientTariff>(`${this.endpoint}/${id}`, data)
			.then(d => d.data);
	}

	async delete(id: number) {
		return api.delete<void>(`${this.endpoint}/${id}`).then(d => d.data);
	}
}

export const clientTariffService = new ClientTariffService();
