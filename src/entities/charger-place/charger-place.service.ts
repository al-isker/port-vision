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
	ChargerPlaceFormCreate,
	ChargerPlaceFormUpdate,
	IChargerPlace,
	IChargerPlaceById
} from './charger-place.type';

class ChargerPlaceService {
	private endpoint = 'charger_place';

	async getAll(params?: SearchParamsForGetAll) {
		return api
			.get<Pagination<IChargerPlace[]>>(this.endpoint, {
				params: getSearchParamsForGetAll(params)
			})
			.then(d => d.data.content);
	}

	async getPagination(params: SearchParamsForGetPagination) {
		return api
			.get<Pagination<IChargerPlace[]>>(this.endpoint, {
				params: getSearchParamsForGetPagination(params)
			})
			.then(d => d.data);
	}

	async getById(id: number) {
		return api
			.get<IChargerPlaceById>(`${this.endpoint}/${id}`)
			.then(d => d.data);
	}

	async create(data: ChargerPlaceFormCreate) {
		return api.post<IChargerPlace>(this.endpoint, data).then(d => d.data);
	}

	async update(id: number, data: ChargerPlaceFormUpdate) {
		return api
			.put<IChargerPlace>(`${this.endpoint}/${id}`, data)
			.then(d => d.data);
	}

	async delete(id: number) {
		return api.delete<void>(`${this.endpoint}/${id}`).then(d => d.data);
	}
}

export const chargerPlaceService = new ChargerPlaceService();
