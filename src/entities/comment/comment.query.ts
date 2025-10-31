import { useMutation } from '@/shared/hooks/useMutation';

import { commentService } from './comment.service';

export const useCreateCommentMutation = () => {
	return useMutation({
		mutationKey: ['comment'],
		mutationFn: (data: any) => commentService.create(data)
	});
};
