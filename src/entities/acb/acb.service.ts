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

import { IAcbItem, IAcbRent } from './acb.type';

class AcbService {
	private endpoint = 'acb';

	async getAll(params?: SearchParamsForGetAll) {
		return api
			.get<Pagination<IAcbItem[]>>(this.endpoint, {
				params: getSearchParamsForGetAll(params)
			})
			.then(d => d.data.content);
	}

	async getPagination(params: SearchParamsForGetPagination) {
		return api
			.get<Pagination<IAcbItem[]>>(this.endpoint, {
				params: getSearchParamsForGetPagination(params)
			})
			.then(d => d.data);
	}

	async getById(id: number) {
		return api.get<IAcbItem>(`${this.endpoint}/${id}`).then(d => d.data);
	}

	async getAllByChargerId(chargerId: number) {
		return api
			.get<IAcbItem[]>(`${this.endpoint}/charger/${chargerId}`)
			.then(d => d.data);
	}

	async rent(acbUuid: string) {
		return api
			.post<IAcbRent>(`${this.endpoint}/rent/${acbUuid}`)
			.then(d => d.data);
	}
}

export const acbService = new AcbService();
