import { keepPreviousData } from '@tanstack/react-query';

import { useMutation } from '@/shared/hooks/useMutation';
import { usePaginationParams } from '@/shared/hooks/usePaginationParams';
import { useQuery } from '@/shared/hooks/useQuery';
import { isEmpty } from '@/shared/utils/checks/is-empty';

import { referrerService } from './referrer.service';
import { ReferrerFormCreate, ReferrerFormUpdate } from './referrer.type';

export const useGetAllReferrerQuery = () => {
	return useQuery({
		queryKey: ['referrer', 'list'],
		queryFn: () => referrerService.getAll()
	});
};

export const useGetPaginationReferrerQuery = () => {
	const { page } = usePaginationParams();

	return useQuery({
		enabled: !isEmpty(page),
		queryKey: ['referrer', { page }],
		queryFn: () => referrerService.getPagination({ page: page! }),
		placeholderData: keepPreviousData
	});
};

export const useGetByIdReferrerQuery = (id?: number) => {
	return useQuery({
		enabled: !isEmpty(id),
		queryKey: ['referrer', id],
		queryFn: () => referrerService.getById(id!)
	});
};

export const useCreateReferrerMutation = () => {
	return useMutation({
		mutationKey: ['referrer'],
		mutationFn: (data: ReferrerFormCreate) => referrerService.create(data)
	});
};

export const useUpdateReferrerMutation = (id: number) => {
	return useMutation({
		mutationKey: ['referrer'],
		mutationFn: (data: ReferrerFormUpdate) => referrerService.update(id, data)
	});
};

export const useDeleteReferrerMutation = (id: number) => {
	return useMutation({
		mutationKey: ['referrer'],
		mutationFn: () => referrerService.delete(id)
	});
};
