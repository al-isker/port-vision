'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetAllByChargerIdAcbQuery } from '@/entities/acb/acb.query';
import { useGetByIdChargerMonitoringQuery } from '@/entities/charger-monitoring/charger-monitoring.query';
import { useGetByIdPartnerQuery } from '@/entities/partner/partner.query';

import { useIdParam } from '@/shared/hooks/useIdParam';

import { ChargerMonitoringByIdView } from './ChargerMonitoringByIdView';

export const ChargerMonitoringById = () => {
	const chargerMonitoringId = useIdParam();

	const chargerMonitoringQuery =
		useGetByIdChargerMonitoringQuery(chargerMonitoringId);

	const acbQuery = useGetAllByChargerIdAcbQuery(chargerMonitoringId);

	const partnerQuery = useGetByIdPartnerQuery(
		chargerMonitoringQuery.data?.partnerId
	);

	if (
		chargerMonitoringQuery.isPending ||
		acbQuery.isPending ||
		partnerQuery.isLoading
	) {
		return <LoadingView />;
	}

	if (chargerMonitoringQuery.isError) {
		return <ErrorView error={chargerMonitoringQuery.error} />;
	}

	if (acbQuery.isError) {
		return <ErrorView error={acbQuery.error} />;
	}

	if (partnerQuery.isError) {
		return <ErrorView error={partnerQuery.error} />;
	}

	return (
		<ChargerMonitoringByIdView
			chargerMonitoringItem={chargerMonitoringQuery.data}
			acb={acbQuery.data}
			partner={partnerQuery.data}
		/>
	);
};
