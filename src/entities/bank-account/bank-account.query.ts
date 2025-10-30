import { keepPreviousData } from '@tanstack/react-query';

import { usePaginationParams } from '@/shared/hooks/usePaginationParams';
import { useQuery } from '@/shared/hooks/useQuery';
import { isEmpty } from '@/shared/utils/checks/is-empty';

import { bankAccountService } from './bank-account.service';

export const useGetAllBankAccountQuery = () => {
	return useQuery({
		queryKey: ['bank-account', 'list'],
		queryFn: () => bankAccountService.getAll()
	});
};

export const useGetPaginationBankAccountQuery = () => {
	const { page } = usePaginationParams();

	return useQuery({
		enabled: !isEmpty(page),
		queryKey: ['bank-account', { page }],
		queryFn: () => bankAccountService.getPagination({ page: page! }),
		placeholderData: keepPreviousData
	});
};

export const useGetByIdBankAccountQuery = (id?: number) => {
	return useQuery({
		enabled: !isEmpty(id),
		queryKey: ['bank-account', id],
		queryFn: () => bankAccountService.getById(id!)
	});
};
