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
	IReferrer,
	ReferrerFormCreate,
	ReferrerFormUpdate
} from './referrer.type';

class ReferrerService {
	private endpoint = 'referrer';

	async getAll(params?: SearchParamsForGetAll) {
		return api
			.get<Pagination<IReferrer[]>>(this.endpoint, {
				params: getSearchParamsForGetAll(params)
			})
			.then(d => d.data.content);
	}

	async getPagination(params: SearchParamsForGetPagination) {
		return api
			.get<Pagination<IReferrer[]>>(this.endpoint, {
				params: getSearchParamsForGetPagination(params)
			})
			.then(d => d.data);
	}

	async getById(id: number) {
		return api.get<IReferrer>(`${this.endpoint}/${id}`).then(d => d.data);
	}

	async create(data: ReferrerFormCreate) {
		return api.post<IReferrer>(this.endpoint, data).then(d => d.data);
	}

	async update(id: number, data: ReferrerFormUpdate) {
		return api.put<IReferrer>(`${this.endpoint}/${id}`, data).then(d => d.data);
	}

	async delete(id: number) {
		return api.delete<void>(`${this.endpoint}/${id}`).then(d => d.data);
	}
}

export const referrerService = new ReferrerService();
