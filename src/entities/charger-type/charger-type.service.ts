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
	ChargerTypeFormCreate,
	ChargerTypeFormUpdate,
	IChargerType
} from './charger-type.type';

class ChargerTypeService {
	private endpoint = 'charger_type';

	async getAll(params?: SearchParamsForGetAll) {
		return api
			.get<Pagination<IChargerType[]>>(this.endpoint, {
				params: getSearchParamsForGetAll(params)
			})
			.then(d => d.data.content);
	}

	async getPagination(params: SearchParamsForGetPagination) {
		return api
			.get<Pagination<IChargerType[]>>(this.endpoint, {
				params: getSearchParamsForGetPagination(params)
			})
			.then(d => d.data);
	}

	async getById(id: number) {
		return api.get<IChargerType>(`${this.endpoint}/${id}`).then(d => d.data);
	}

	async create(data: ChargerTypeFormCreate) {
		return api.post<IChargerType>(this.endpoint, data).then(d => d.data);
	}

	async update(id: number, data: ChargerTypeFormUpdate) {
		return api
			.put<IChargerType>(`${this.endpoint}/${id}`, data)
			.then(d => d.data);
	}

	async delete(id: number) {
		return api.delete<void>(`${this.endpoint}/${id}`).then(d => d.data);
	}
}

export const chargerTypeService = new ChargerTypeService();
