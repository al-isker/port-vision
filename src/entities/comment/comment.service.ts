import { api } from '@/shared/api/api';

class CommentService {
	private endpoint = 'comment';

	async create(data: any) {
		return api.post(this.endpoint, data).then(d => d.data);
	}
}

export const commentService = new CommentService();
