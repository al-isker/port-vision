import { keepPreviousData } from '@tanstack/react-query';

import { useMutation } from '@/shared/hooks/useMutation';
import { usePaginationParams } from '@/shared/hooks/usePaginationParams';
import { useQuery } from '@/shared/hooks/useQuery';
import { isEmpty } from '@/shared/utils/checks/is-empty';

import { partnerTariffService } from './partner-tariff.service';
import {
	PartnerTariffFormCreate,
	PartnerTariffFormUpdate
} from './partner-tariff.type';

export const useGetAllPartnerTariffQuery = () => {
	return useQuery({
		queryKey: ['partner-tariff', 'list'],
		queryFn: () => partnerTariffService.getAll()
	});
};

export const useGetPaginationPartnerTariffQuery = () => {
	const { page } = usePaginationParams();

	return useQuery({
		enabled: !isEmpty(page),
		queryKey: ['partner-tariff', { page }],
		queryFn: () => partnerTariffService.getPagination({ page: page! }),
		placeholderData: keepPreviousData
	});
};

export const useGetByIdPartnerTariffQuery = (id?: number) => {
	return useQuery({
		enabled: !isEmpty(id),
		queryKey: ['partner-tariff', id],
		queryFn: () => partnerTariffService.getById(id!)
	});
};

export const useCreatePartnerTariffMutation = () => {
	return useMutation({
		mutationKey: ['partner-tariff'],
		mutationFn: (data: PartnerTariffFormCreate) =>
			partnerTariffService.create(data)
	});
};

export const useUpdatePartnerTariffMutation = (id: number) => {
	return useMutation({
		mutationKey: ['partner-tariff'],
		mutationFn: (data: PartnerTariffFormUpdate) =>
			partnerTariffService.update(id, data)
	});
};

export const useDeletePartnerTariffMutation = (id: number) => {
	return useMutation({
		mutationKey: ['partner-tariff'],
		mutationFn: () => partnerTariffService.delete(id)
	});
};
