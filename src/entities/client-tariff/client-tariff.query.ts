import { keepPreviousData } from '@tanstack/react-query';

import { useMutation } from '@/shared/hooks/useMutation';
import { usePaginationParams } from '@/shared/hooks/usePaginationParams';
import { useQuery } from '@/shared/hooks/useQuery';
import { isEmpty } from '@/shared/utils/checks/is-empty';

import { clientTariffService } from './client-tariff.service';
import {
	ClientTariffFormCreate,
	ClientTariffFormUpdate
} from './client-tariff.type';

export const useGetAllClientTariffQuery = () => {
	return useQuery({
		queryKey: ['client-tariff', 'list'],
		queryFn: () => clientTariffService.getAll()
	});
};

export const useGetPaginationClientTariffQuery = () => {
	const { page } = usePaginationParams();

	return useQuery({
		enabled: !isEmpty(page),
		queryKey: ['client-tariff', { page }],
		queryFn: () => clientTariffService.getPagination({ page: page! }),
		placeholderData: keepPreviousData
	});
};

export const useGetByIdClientTariffQuery = (id?: number) => {
	return useQuery({
		enabled: !isEmpty(id),
		queryKey: ['client-tariff', id],
		queryFn: () => clientTariffService.getById(id!)
	});
};

export const useCreateClientTariffMutation = () => {
	return useMutation({
		mutationKey: ['client-tariff'],
		mutationFn: (data: ClientTariffFormCreate) =>
			clientTariffService.create(data)
	});
};

export const useUpdateClientTariffMutation = (id: number) => {
	return useMutation({
		mutationKey: ['client-tariff'],
		mutationFn: (data: ClientTariffFormUpdate) =>
			clientTariffService.update(id, data)
	});
};

export const useDeleteClientTariffMutation = (id: number) => {
	return useMutation({
		mutationKey: ['client-tariff'],
		mutationFn: () => clientTariffService.delete(id)
	});
};
