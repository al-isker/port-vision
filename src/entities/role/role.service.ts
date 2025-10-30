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
	IPermissionName,
	IRole,
	RoleFormCreate,
	RoleFormUpdate
} from './role.type';

class RoleService {
	private endpoint = 'role';

	async getAll(params?: SearchParamsForGetAll) {
		return api
			.get<Pagination<IRole[]>>(this.endpoint, {
				params: getSearchParamsForGetAll(params)
			})
			.then(d => d.data.content);
	}

	async getPagination(params: SearchParamsForGetPagination) {
		return api
			.get<Pagination<IRole[]>>(this.endpoint, {
				params: getSearchParamsForGetPagination(params)
			})
			.then(d => d.data);
	}

	async getById(id: number) {
		return api.get<IRole>(`${this.endpoint}/${id}`).then(d => d.data);
	}

	async permissionNameGetAll() {
		return api
			.get<IPermissionName[]>(`${this.endpoint}/permission_names`)
			.then(d => d.data);
	}

	async create(data: RoleFormCreate) {
		return api.post<IRole>(this.endpoint, data).then(d => d.data);
	}

	async update(id: number, data: RoleFormUpdate) {
		return api.put<IRole>(`${this.endpoint}/${id}`, data).then(d => d.data);
	}

	async delete(id: number) {
		return api.delete<void>(`${this.endpoint}/${id}`).then(d => d.data);
	}
}

export const roleService = new RoleService();
