import { keepPreviousData, useMutation } from '@tanstack/react-query';

import { usePaginationParams } from '@/shared/hooks/usePaginationParams';
import { useQuery } from '@/shared/hooks/useQuery';
import { isEmpty } from '@/shared/utils/checks/is-empty';

import { acbService } from './acb.service';

export const useGetAllAcbQuery = () => {
	return useQuery({
		queryKey: ['acb', 'list'],
		queryFn: () => acbService.getAll()
	});
};

export const useGetPaginationAcbQuery = () => {
	const { page } = usePaginationParams();

	return useQuery({
		enabled: !isEmpty(page),
		queryKey: ['acb', { page }],
		queryFn: () => acbService.getPagination({ page: page! }),
		placeholderData: keepPreviousData
	});
};

export const useGetByIdAcbQuery = (id?: number) => {
	return useQuery({
		enabled: !isEmpty(id),
		queryKey: ['acb', id],
		queryFn: () => acbService.getById(id!)
	});
};

export const useGetAllByChargerIdAcbQuery = (chargerId?: number) => {
	return useQuery({
		enabled: !isEmpty(chargerId),
		queryKey: ['acb', 'charger', chargerId],
		queryFn: () => acbService.getAllByChargerId(chargerId!)
	});
};

export const useRentAcbMutation = (acbUuid: string) => {
	return useMutation({
		mutationKey: ['acb', 'rent', acbUuid],
		mutationFn: () => acbService.rent(acbUuid),
		gcTime: 0
	});
};
