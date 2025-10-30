import { useQuery } from '@/shared/hooks/useQuery';
import { isEmpty } from '@/shared/utils/checks/is-empty';

import { portService } from './port.service';

export const useGetAllPortQuery = () => {
	return useQuery({
		queryKey: ['port', 'list'],
		queryFn: () => portService.getAll()
	});
};

export const useGetByIdPortQuery = (id?: number) => {
	return useQuery({
		enabled: !isEmpty(id),
		queryKey: ['port', id],
		queryFn: () => portService.getById(id!)
	});
};
