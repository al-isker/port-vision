import { keepPreviousData } from '@tanstack/react-query';

import { useMutation } from '@/shared/hooks/useMutation';
import { usePaginationParams } from '@/shared/hooks/usePaginationParams';
import { useQuery } from '@/shared/hooks/useQuery';
import { isEmpty } from '@/shared/utils/checks/is-empty';

import { partnerService } from './partner.service';
import { PartnerFormCreate, PartnerFormUpdate } from './partner.type';

export const useGetAllPartnerQuery = () => {
	return useQuery({
		queryKey: ['partner', 'list'],
		queryFn: () => partnerService.getAll()
	});
};

export const useGetPaginationPartnerQuery = () => {
	const { page } = usePaginationParams();

	return useQuery({
		enabled: !isEmpty(page),
		queryKey: ['partner', { page }],
		queryFn: () => partnerService.getPagination({ page: page! }),
		placeholderData: keepPreviousData
	});
};

export const useGetByIdPartnerQuery = (id?: number) => {
	return useQuery({
		enabled: !isEmpty(id),
		queryKey: ['partner', id],
		queryFn: () => partnerService.getById(id!)
	});
};

export const useCreatePartnerMutation = () => {
	return useMutation({
		mutationKey: ['partner'],
		mutationFn: (data: PartnerFormCreate) => partnerService.create(data)
	});
};

export const useUpdatePartnerMutation = (id: number) => {
	return useMutation({
		mutationKey: ['partner'],
		mutationFn: (data: PartnerFormUpdate) => partnerService.update(id, data)
	});
};

export const useDeletePartnerMutation = (id: number) => {
	return useMutation({
		mutationKey: ['partner'],
		mutationFn: () => partnerService.delete(id)
	});
};
