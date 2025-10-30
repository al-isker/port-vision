'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';
import { Pagination } from '@/widgets/pagination/Pagination';

import { LoadingView } from '@/ui/LoadingView';

import { useGetPaginationChargerMonitoringQuery } from '@/entities/charger-monitoring/charger-monitoring.query';

import { ChargerMonitoringBodyView } from './ChargerMonitoringBodyView';

export const ChargerMonitoringBody = () => {
	const chargerMonitoringQuery = useGetPaginationChargerMonitoringQuery();

	if (chargerMonitoringQuery.isPending) {
		return <LoadingView />;
	}

	if (chargerMonitoringQuery.isError) {
		return <ErrorView error={chargerMonitoringQuery.error} />;
	}

	return (
		<>
			<ChargerMonitoringBodyView
				chargeMonitoring={chargerMonitoringQuery.data.content}
			/>
			<Pagination totalPages={chargerMonitoringQuery.data.totalPages} />
		</>
	);
};
