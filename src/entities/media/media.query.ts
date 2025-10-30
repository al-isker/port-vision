import { useMutation } from '@/shared/hooks/useMutation';

import { mediaService } from './media.service';
import { MediaBodyCreate } from './media.type';

export const useCreateMediaMutation = () => {
	return useMutation({
		mutationFn: (data: MediaBodyCreate) => mediaService.create(data)
	});
};

export const useDeleteMediaMutation = () => {
	return useMutation({
		mutationFn: (id: number) => mediaService.delete(id)
	});
};
