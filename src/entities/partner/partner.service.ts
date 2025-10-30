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

import { IPartner, PartnerFormCreate, PartnerFormUpdate } from './partner.type';

class PartnerService {
	private endpoint = 'partner';

	async getAll(params?: SearchParamsForGetAll) {
		return api
			.get<Pagination<IPartner[]>>(this.endpoint, {
				params: getSearchParamsForGetAll(params)
			})
			.then(d => d.data.content);
	}

	async getPagination(params: SearchParamsForGetPagination) {
		return api
			.get<Pagination<IPartner[]>>(this.endpoint, {
				params: getSearchParamsForGetPagination(params)
			})
			.then(d => d.data);
	}

	async getById(id: number) {
		return api.get<IPartner>(`${this.endpoint}/${id}`).then(d => d.data);
	}

	async create(data: PartnerFormCreate) {
		return api.post<IPartner>(this.endpoint, data).then(d => d.data);
	}

	async update(id: number, data: PartnerFormUpdate) {
		return api.put<IPartner>(`${this.endpoint}/${id}`, data).then(d => d.data);
	}

	async delete(id: number) {
		return api.delete<void>(`${this.endpoint}/${id}`).then(d => d.data);
	}
}

export const partnerService = new PartnerService();
