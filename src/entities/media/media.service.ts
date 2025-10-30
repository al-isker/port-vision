import { api } from '@/shared/api/api';
import { API_TIMEOUT_FOR_MEDIA } from '@/shared/api/config';

import { IMedia, MediaBodyCreate } from './media.type';

class MediaService {
	private endpoint = 'media';

	async create(data: MediaBodyCreate) {
		return api
			.postForm<IMedia>(this.endpoint, data, { timeout: API_TIMEOUT_FOR_MEDIA })
			.then(d => d.data);
	}

	async delete(id: number) {
		return api.delete<void>(`${this.endpoint}/${id}`).then(d => d.data);
	}
}

export const mediaService = new MediaService();
