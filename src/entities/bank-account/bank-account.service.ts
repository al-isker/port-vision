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

import { IBankAccount } from './bank-account.type';

class BankAccountService {
	private endpoint = 'bank_account';

	async getAll(params?: SearchParamsForGetAll) {
		return api
			.get<Pagination<IBankAccount[]>>(this.endpoint, {
				params: getSearchParamsForGetAll(params)
			})
			.then(d => d.data.content);
	}

	async getPagination(params: SearchParamsForGetPagination) {
		return api
			.get<Pagination<IBankAccount[]>>(this.endpoint, {
				params: getSearchParamsForGetPagination(params)
			})
			.then(d => d.data);
	}

	async getById(id: number) {
		return api.get<IBankAccount>(`${this.endpoint}/${id}`).then(d => d.data);
	}
}

export const bankAccountService = new BankAccountService();
