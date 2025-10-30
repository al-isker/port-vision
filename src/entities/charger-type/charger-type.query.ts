import { keepPreviousData } from '@tanstack/react-query';

import { useMutation } from '@/shared/hooks/useMutation';
import { usePaginationParams } from '@/shared/hooks/usePaginationParams';
import { useQuery } from '@/shared/hooks/useQuery';
import { isEmpty } from '@/shared/utils/checks/is-empty';

import { chargerTypeService } from './charger-type.service';
import {
	ChargerTypeFormCreate,
	ChargerTypeFormUpdate
} from './charger-type.type';

export const useGetAllChargerTypeQuery = () => {
	return useQuery({
		queryKey: ['charger-type', 'list'],
		queryFn: () => chargerTypeService.getAll()
	});
};

export const useGetPaginationChargerTypeQuery = () => {
	const { page } = usePaginationParams();

	return useQuery({
		enabled: !isEmpty(page),
		queryKey: ['charger-type', { page }],
		queryFn: () => chargerTypeService.getPagination({ page: page! }),
		placeholderData: keepPreviousData
	});
};

export const useGetByIdChargerTypeQuery = (id?: number) => {
	return useQuery({
		enabled: !isEmpty(id),
		queryKey: ['charger-type', id],
		queryFn: () => chargerTypeService.getById(id!)
	});
};

export const useCreateChargerTypeMutation = () => {
	return useMutation({
		mutationKey: ['charger-type'],
		mutationFn: (data: ChargerTypeFormCreate) => chargerTypeService.create(data)
	});
};

export const useUpdateChargerTypeMutation = (id: number) => {
	return useMutation({
		mutationKey: ['charger-type'],
		mutationFn: (data: ChargerTypeFormUpdate) =>
			chargerTypeService.update(id, data)
	});
};

export const useDeleteChargerTypeMutation = (id: number) => {
	return useMutation({
		mutationKey: ['charger-type'],
		mutationFn: () => chargerTypeService.delete(id)
	});
};
