import { useMutation } from '@/shared/hooks/useMutation';

import { partnerService } from './subscription.service';

export const useCreateSubscriptionMutation = () => {
	return useMutation({
		mutationKey: ['subscription'],
		mutationFn: (data: any) => partnerService.create(data)
	});
};
