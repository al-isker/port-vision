import { keepPreviousData } from '@tanstack/react-query';

import { useMutation } from '@/shared/hooks/useMutation';
import { usePaginationParams } from '@/shared/hooks/usePaginationParams';
import { useQuery } from '@/shared/hooks/useQuery';
import { isEmpty } from '@/shared/utils/checks/is-empty';

import { chargerPlaceService } from './charger-place.service';
import {
	ChargerPlaceFormCreate,
	ChargerPlaceFormUpdate
} from './charger-place.type';

export const useGetAllChargerPlaceQuery = () => {
	return useQuery({
		queryKey: ['charger-place', 'list'],
		queryFn: () => chargerPlaceService.getAll()
	});
};

export const useGetPaginationChargerPlaceQuery = () => {
	const { page } = usePaginationParams();

	return useQuery({
		enabled: !isEmpty(page),
		queryKey: ['charger-place', { page }],
		queryFn: () => chargerPlaceService.getPagination({ page: page! }),
		placeholderData: keepPreviousData
	});
};

export const useGetByIdChargerPlaceQuery = (id?: number) => {
	return useQuery({
		enabled: !isEmpty(id),
		queryKey: ['charger-place', id],
		queryFn: () => chargerPlaceService.getById(id!)
	});
};

export const useCreateChargerPlaceMutation = () => {
	return useMutation({
		mutationKey: ['charger-place'],
		mutationFn: (data: ChargerPlaceFormCreate) =>
			chargerPlaceService.create(data)
	});
};

export const useUpdateChargerPlaceMutation = (id: number) => {
	return useMutation({
		mutationKey: ['charger-place'],
		mutationFn: (data: ChargerPlaceFormUpdate) =>
			chargerPlaceService.update(id, data)
	});
};

export const useDeleteChargerPlaceMutation = (id: number) => {
	return useMutation({
		mutationKey: ['charger-place'],
		mutationFn: () => chargerPlaceService.delete(id)
	});
};
