import { keepPreviousData } from '@tanstack/react-query';

import { usePaginationParams } from '@/shared/hooks/usePaginationParams';
import { useQuery } from '@/shared/hooks/useQuery';
import { isEmpty } from '@/shared/utils/checks/is-empty';

import { chargerMonitoringService } from './charger-monitoring.service';

export const useGetAllChargerMonitoringQuery = () => {
	return useQuery({
		queryKey: ['charger-monitoring', 'list'],
		queryFn: () => chargerMonitoringService.getAll()
	});
};

export const useGetPaginationChargerMonitoringQuery = () => {
	const { page } = usePaginationParams();

	return useQuery({
		enabled: !isEmpty(page),
		queryKey: ['charger-monitoring', { page }],
		queryFn: () => chargerMonitoringService.getPagination({ page: page! }),
		placeholderData: keepPreviousData
	});
};

export const useGetByIdChargerMonitoringQuery = (id?: number) => {
	return useQuery({
		enabled: !isEmpty(id),
		queryKey: ['charger-monitoring', id],
		queryFn: () => chargerMonitoringService.getById(id!)
	});
};
