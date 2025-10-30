import { api } from '@/shared/api/api';
import { getSearchParamsForGetAll } from '@/shared/config/search-params/search-params.helper';
import { PAGINATION_OFFSET_MAX } from '@/shared/config/search-params/search-params.values';
import { Pagination } from '@/shared/types/pagination';
import {
	SearchParamsForGetAll,
	SearchParamsForGetPagination
} from '@/shared/types/search-params';

import { IChargerMonitoringItem } from './charger-monitoring.type';

class ChargerMonitoringService {
	private endpoint = 'charger/monitoring';

	async getAll(params?: SearchParamsForGetAll) {
		return api
			.get<Pagination<IChargerMonitoringItem[]>>(this.endpoint, {
				params: getSearchParamsForGetAll(params)
			})
			.then(d => d.data.content);
	}

	async getPagination(params: SearchParamsForGetPagination) {
		return api
			.get<Pagination<IChargerMonitoringItem[]>>(this.endpoint, {
				// в будущем будет переведено на классическую пагинацию
				// с использованием getSearchParamsForGetPagination
				params: Object.assign(params, {
					offset: PAGINATION_OFFSET_MAX
				})
			})
			.then(d => d.data);
	}

	async getById(id: number) {
		return api
			.get<IChargerMonitoringItem>(`${this.endpoint}/${id}`)
			.then(d => d.data);
	}
}

export const chargerMonitoringService = new ChargerMonitoringService();
