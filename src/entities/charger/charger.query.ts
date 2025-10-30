import { keepPreviousData } from '@tanstack/react-query';

import { FILTER_STATUS_NAME } from '@/shared/config/search-params/search-params.names';
import { useGetSearchParams } from '@/shared/hooks/useGetSearchParams';
import { useMutation } from '@/shared/hooks/useMutation';
import { usePaginationParams } from '@/shared/hooks/usePaginationParams';
import { useQuery } from '@/shared/hooks/useQuery';
import { isEmpty } from '@/shared/utils/checks/is-empty';

import { chargerService } from './charger.service';
import { ChargerFormCreate, ChargerFormUpdate } from './charger.type';

export const useGetAllChargerQuery = () => {
	const { status } = useGetSearchParams(FILTER_STATUS_NAME);

	return useQuery({
		queryKey: ['charger', 'list', { status }],
		queryFn: () => chargerService.getAll({ status }),
		placeholderData: keepPreviousData
	});
};

export const useGetPaginationChargerQuery = () => {
	const { page } = usePaginationParams();

	return useQuery({
		enabled: !isEmpty(page),
		queryKey: ['charger', { page }],
		queryFn: () => chargerService.getPagination({ page: page! }),
		placeholderData: keepPreviousData
	});
};

export const useGetByIdChargerQuery = (id?: number) => {
	return useQuery({
		enabled: !isEmpty(id),
		queryKey: ['charger', id],
		queryFn: () => chargerService.getById(id!)
	});
};

export const useCreateChargerMutation = () => {
	return useMutation({
		mutationKey: ['charger'],
		mutationFn: (data: ChargerFormCreate) => chargerService.create(data)
	});
};

export const useUpdateChargerMutation = (id: number) => {
	return useMutation({
		mutationKey: ['charger'],
		mutationFn: (data: ChargerFormUpdate) => chargerService.update(id, data)
	});
};

export const useDeleteChargerMutation = (id: number) => {
	return useMutation({
		mutationKey: ['charger'],
		mutationFn: () => chargerService.delete(id)
	});
};

export const useAttachModeChargerMutation = (id: number) => {
	return useMutation({
		mutationKey: ['charger', 'attach-mode'],
		mutationFn: () => chargerService.attachMode(id),
		gcTime: 0
	});
};
