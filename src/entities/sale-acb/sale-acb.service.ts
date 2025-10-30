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

import { ISaleAcbByUuid, ISaleAcbItem } from './sale-acb.type';

class SaleAcbService {
	private endpoint = 'sale';

	async getAll(params?: SearchParamsForGetAll) {
		return api
			.get<Pagination<ISaleAcbItem[]>>(this.endpoint, {
				params: getSearchParamsForGetAll(params)
			})
			.then(d => d.data.content);
	}

	async getPagination(params: SearchParamsForGetPagination) {
		return api
			.get<Pagination<ISaleAcbItem[]>>(this.endpoint, {
				params: getSearchParamsForGetPagination(params)
			})
			.then(d => d.data);
	}

	async getByUuid(uuid: string) {
		return api
			.get<ISaleAcbByUuid>(`${this.endpoint}/${uuid}`)
			.then(d => d.data);
	}
}

export const saleAcbService = new SaleAcbService();
