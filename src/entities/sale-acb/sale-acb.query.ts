import { keepPreviousData } from '@tanstack/react-query';

import { SORT_DIRECTION_NAME } from '@/shared/config/search-params/search-params.names';
import { useGetSearchParams } from '@/shared/hooks/useGetSearchParams';
import { usePaginationParams } from '@/shared/hooks/usePaginationParams';
import { useQuery } from '@/shared/hooks/useQuery';
import { isEmpty } from '@/shared/utils/checks/is-empty';

import { saleAcbService } from './sale-acb.service';

export const useGetAllSaleAcbQuery = () => {
	return useQuery({
		queryKey: ['sale-acb', 'list'],
		queryFn: () => saleAcbService.getAll()
	});
};

export const useGetPaginationSaleAcbQuery = () => {
	const { page } = usePaginationParams();
	const { direction } = useGetSearchParams(SORT_DIRECTION_NAME);

	return useQuery({
		enabled: !isEmpty(page),
		queryKey: ['sale-acb', { page }],
		queryFn: () => saleAcbService.getPagination({ page: page!, direction }),
		placeholderData: keepPreviousData
	});
};

export const useGetByUuidSaleAcbQuery = (uuid?: string) => {
	return useQuery({
		enabled: !isEmpty(uuid),
		queryKey: ['sale-acb', uuid],
		queryFn: () => saleAcbService.getByUuid(uuid!)
	});
};
