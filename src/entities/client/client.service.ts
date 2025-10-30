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

import { ClientFormCreate, ClientFormUpdate, IClient } from './client.type';

class ClientService {
	private endpoint = 'client';

	async getAll(params?: SearchParamsForGetAll) {
		return api
			.get<Pagination<IClient[]>>(this.endpoint, {
				params: getSearchParamsForGetAll(params)
			})
			.then(d => d.data.content);
	}

	async getPagination(params: SearchParamsForGetPagination) {
		return api
			.get<Pagination<IClient[]>>(this.endpoint, {
				params: getSearchParamsForGetPagination(params)
			})
			.then(d => d.data);
	}

	async getById(id: number) {
		return api.get<IClient>(`${this.endpoint}/${id}`).then(d => d.data);
	}

	async create(data: ClientFormCreate) {
		return api.post<IClient>(this.endpoint, data).then(d => d.data);
	}

	async update(id: number, data: ClientFormUpdate) {
		return api.put<IClient>(`${this.endpoint}/${id}`, data).then(d => d.data);
	}

	async delete(id: number) {
		return api.delete<void>(`${this.endpoint}/${id}`).then(d => d.data);
	}
}

export const clientService = new ClientService();
