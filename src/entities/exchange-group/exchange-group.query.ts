import { keepPreviousData } from '@tanstack/react-query';

import { useMutation } from '@/shared/hooks/useMutation';
import { usePaginationParams } from '@/shared/hooks/usePaginationParams';
import { useQuery } from '@/shared/hooks/useQuery';
import { isEmpty } from '@/shared/utils/checks/is-empty';

import { exchangeGroupService } from './exchange-group.service';
import {
	ExchangeGroupFormCreate,
	ExchangeGroupFormUpdate
} from './exchange-group.type';

export const useGetAllExchangeGroupQuery = () => {
	return useQuery({
		queryKey: ['exchange-group', 'list'],
		queryFn: () => exchangeGroupService.getAll()
	});
};

export const useGetPaginationExchangeGroupQuery = () => {
	const { page } = usePaginationParams();

	return useQuery({
		enabled: !isEmpty(page),
		queryKey: ['exchange-group', { page }],
		queryFn: () => exchangeGroupService.getPagination({ page: page! }),
		placeholderData: keepPreviousData
	});
};

export const useGetByIdExchangeGroupQuery = (id?: number) => {
	return useQuery({
		enabled: !isEmpty(id),
		queryKey: ['exchange-group', id],
		queryFn: () => exchangeGroupService.getById(id!)
	});
};

export const useCreateExchangeGroupMutation = () => {
	return useMutation({
		mutationKey: ['exchange-group'],
		mutationFn: (data: ExchangeGroupFormCreate) =>
			exchangeGroupService.create(data)
	});
};

export const useUpdateExchangeGroupMutation = (id: number) => {
	return useMutation({
		mutationKey: ['exchange-group'],
		mutationFn: (data: ExchangeGroupFormUpdate) =>
			exchangeGroupService.update(id, data)
	});
};

export const useDeleteExchangeGroupMutation = (id: number) => {
	return useMutation({
		mutationKey: ['exchange-group'],
		mutationFn: () => exchangeGroupService.delete(id)
	});
};
