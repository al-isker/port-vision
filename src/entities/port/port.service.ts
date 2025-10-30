import { api } from '@/shared/api/api';

import { IPort } from './port.type';

class PortService {
	private endpoint = 'port';

	async getAll() {
		return api.get<IPort[]>(this.endpoint).then(d => d.data);
	}

	async getById(id: number) {
		return api.get<IPort>(`${this.endpoint}/${id}`).then(d => d.data);
	}
}

export const portService = new PortService();
