'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetByIdChargerTypeQuery } from '@/entities/charger-type/charger-type.query';
import { useGetByIdPartnerTariffQuery } from '@/entities/partner-tariff/partner-tariff.query';

import { useIdParam } from '@/shared/hooks/useIdParam';

import { PartnerTariffByIdView } from './PartnerTariffByIdView';

export const PartnerTariffById = () => {
	const partnerTariffId = useIdParam();

	const partnerTariffQuery = useGetByIdPartnerTariffQuery(partnerTariffId);

	const chargerTypeQuery = useGetByIdChargerTypeQuery(
		partnerTariffQuery.data?.chargerTypeId
	);

	if (partnerTariffQuery.isPending || chargerTypeQuery.isLoading) {
		return <LoadingView />;
	}

	if (chargerTypeQuery.isError) {
		return <ErrorView error={chargerTypeQuery.error} />;
	}

	if (partnerTariffQuery.isError) {
		return <ErrorView error={partnerTariffQuery.error} />;
	}

	return (
		<PartnerTariffByIdView
			chargerType={chargerTypeQuery.data}
			partnerTariff={partnerTariffQuery.data}
		/>
	);
};
