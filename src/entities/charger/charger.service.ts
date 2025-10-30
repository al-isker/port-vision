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
	ChargerFormCreate,
	ChargerFormUpdate,
	ChargerSearchParams,
	ICharger,
	IChargerAttachMode
} from './charger.type';

class ChargerService {
	private endpoint = 'charger';

	async getAll(params?: SearchParamsForGetAll & ChargerSearchParams) {
		return api
			.get<Pagination<ICharger[]>>(this.endpoint, {
				params: getSearchParamsForGetAll(params)
			})
			.then(d => d.data.content);
	}

	async getPagination(params: SearchParamsForGetPagination) {
		return api
			.get<Pagination<ICharger[]>>(this.endpoint, {
				params: getSearchParamsForGetPagination(params)
			})
			.then(d => d.data);
	}

	async getById(id: number) {
		return api.get<ICharger>(`${this.endpoint}/${id}`).then(d => d.data);
	}

	async create(data: ChargerFormCreate) {
		return api.post<ICharger>(this.endpoint, data).then(d => d.data);
	}

	async update(id: number, data: ChargerFormUpdate) {
		return api.put<ICharger>(`${this.endpoint}/${id}`, data).then(d => d.data);
	}

	async delete(id: number) {
		return api.delete<void>(`${this.endpoint}/${id}`).then(d => d.data);
	}

	async attachMode(id: number) {
		return api
			.post<IChargerAttachMode>(`${this.endpoint}/${id}/attach_mode`)
			.then(d => d.data);
	}
}

export const chargerService = new ChargerService();
