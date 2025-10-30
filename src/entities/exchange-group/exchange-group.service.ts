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
	ExchangeGroupFormCreate,
	ExchangeGroupFormUpdate,
	IExchangeGroup
} from './exchange-group.type';

class ExchangeGroupService {
	private endpoint = 'exchange_group';

	async getAll(params?: SearchParamsForGetAll) {
		return api
			.get<Pagination<IExchangeGroup[]>>(this.endpoint, {
				params: getSearchParamsForGetAll(params)
			})
			.then(d => d.data.content);
	}

	async getPagination(params: SearchParamsForGetPagination) {
		return api
			.get<Pagination<IExchangeGroup[]>>(this.endpoint, {
				params: getSearchParamsForGetPagination(params)
			})
			.then(d => d.data);
	}

	async getById(id: number) {
		return api.get<IExchangeGroup>(`${this.endpoint}/${id}`).then(d => d.data);
	}

	async create(data: ExchangeGroupFormCreate) {
		return api.post<IExchangeGroup>(this.endpoint, data).then(d => d.data);
	}

	async update(id: number, data: ExchangeGroupFormUpdate) {
		return api
			.put<IExchangeGroup>(`${this.endpoint}/${id}`, data)
			.then(d => d.data);
	}

	async delete(id: number) {
		return api.delete<void>(`${this.endpoint}/${id}`).then(d => d.data);
	}
}

export const exchangeGroupService = new ExchangeGroupService();
