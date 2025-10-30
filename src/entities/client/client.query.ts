import { keepPreviousData } from '@tanstack/react-query';

import { useMutation } from '@/shared/hooks/useMutation';
import { usePaginationParams } from '@/shared/hooks/usePaginationParams';
import { useQuery } from '@/shared/hooks/useQuery';
import { isEmpty } from '@/shared/utils/checks/is-empty';

import { clientService } from './client.service';
import { ClientFormCreate, ClientFormUpdate } from './client.type';

export const useGetAllClientQuery = () => {
	return useQuery({
		queryKey: ['client', 'list'],
		queryFn: () => clientService.getAll()
	});
};

export const useGetPaginationClientQuery = () => {
	const { page } = usePaginationParams();

	return useQuery({
		enabled: !isEmpty(page),
		queryKey: ['client', { page }],
		queryFn: () => clientService.getPagination({ page: page! }),
		placeholderData: keepPreviousData
	});
};

export const useGetByIdClientQuery = (id?: number) => {
	return useQuery({
		enabled: !isEmpty(id),
		queryKey: ['client', id],
		queryFn: () => clientService.getById(id!)
	});
};

export const useCreateClientMutation = () => {
	return useMutation({
		mutationKey: ['client'],
		mutationFn: (data: ClientFormCreate) => clientService.create(data)
	});
};

export const useUpdateClientMutation = (id: number) => {
	return useMutation({
		mutationKey: ['client'],
		mutationFn: (data: ClientFormUpdate) => clientService.update(id, data)
	});
};

export const useDeleteClientMutation = (id: number) => {
	return useMutation({
		mutationKey: ['client'],
		mutationFn: () => clientService.delete(id)
	});
};
