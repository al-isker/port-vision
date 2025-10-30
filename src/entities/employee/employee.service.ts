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
	EmployeeFormCreate,
	EmployeeFormUpdate,
	IEmployee
} from './employee.type';

class EmployeeService {
	private endpoint = 'employee';

	async getAll(params?: SearchParamsForGetAll) {
		return api
			.get<Pagination<IEmployee[]>>(this.endpoint, {
				params: getSearchParamsForGetAll(params)
			})
			.then(d => d.data.content);
	}

	async getPagination(params: SearchParamsForGetPagination) {
		return api
			.get<Pagination<IEmployee[]>>(this.endpoint, {
				params: getSearchParamsForGetPagination(params)
			})
			.then(d => d.data);
	}

	async getById(id: number) {
		return api.get<IEmployee>(`${this.endpoint}/${id}`).then(d => d.data);
	}

	async create(data: EmployeeFormCreate) {
		return api.post<IEmployee>(this.endpoint, data).then(d => d.data);
	}

	async update(id: number, data: EmployeeFormUpdate) {
		return api.put<IEmployee>(`${this.endpoint}/${id}`, data).then(d => d.data);
	}

	async delete(id: number) {
		return api.delete<void>(`${this.endpoint}/${id}`).then(d => d.data);
	}
}

export const employeeService = new EmployeeService();
