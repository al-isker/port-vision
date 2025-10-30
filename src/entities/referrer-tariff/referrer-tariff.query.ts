import { keepPreviousData } from '@tanstack/react-query';

import { useMutation } from '@/shared/hooks/useMutation';
import { usePaginationParams } from '@/shared/hooks/usePaginationParams';
import { useQuery } from '@/shared/hooks/useQuery';
import { isEmpty } from '@/shared/utils/checks/is-empty';

import { referrerTariffService } from './referrer-tariff.service';
import {
	ReferrerTariffFormCreate,
	ReferrerTariffFormUpdate
} from './referrer-tariff.type';

export const useGetAllReferrerTariffQuery = () => {
	return useQuery({
		queryKey: ['referrer-tariff', 'list'],
		queryFn: () => referrerTariffService.getAll()
	});
};

export const useGetPaginationReferrerTariffQuery = () => {
	const { page } = usePaginationParams();

	return useQuery({
		enabled: !isEmpty(page),
		queryKey: ['referrer-tariff', { page }],
		queryFn: () => referrerTariffService.getPagination({ page: page! }),
		placeholderData: keepPreviousData
	});
};

export const useGetByIdReferrerTariffQuery = (id?: number) => {
	return useQuery({
		enabled: !isEmpty(id),
		queryKey: ['referrer-tariff', id],
		queryFn: () => referrerTariffService.getById(id!)
	});
};

export const useCreateReferrerTariffMutation = () => {
	return useMutation({
		mutationKey: ['referrer-tariff'],
		mutationFn: (data: ReferrerTariffFormCreate) =>
			referrerTariffService.create(data)
	});
};

export const useUpdateReferrerTariffMutation = (id: number) => {
	return useMutation({
		mutationKey: ['referrer-tariff'],
		mutationFn: (data: ReferrerTariffFormUpdate) =>
			referrerTariffService.update(id, data)
	});
};

export const useDeleteReferrerTariffMutation = (id: number) => {
	return useMutation({
		mutationKey: ['referrer-tariff'],
		mutationFn: () => referrerTariffService.delete(id)
	});
};
