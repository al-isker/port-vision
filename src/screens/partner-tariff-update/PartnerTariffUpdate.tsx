'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetAllChargerTypeQuery } from '@/entities/charger-type/charger-type.query';
import { useGetByIdPartnerTariffQuery } from '@/entities/partner-tariff/partner-tariff.query';

import { useIdParam } from '@/shared/hooks/useIdParam';

import { PartnerTariffUpdateForm } from './PartnerTariffUpdateForm';

export const PartnerTariffUpdate = () => {
	const partnerTariffId = useIdParam();

	const partnerTariffQuery = useGetByIdPartnerTariffQuery(partnerTariffId);

	const chargerTypeQuery = useGetAllChargerTypeQuery();

	if (partnerTariffQuery.isPending || chargerTypeQuery.isPending) {
		return <LoadingView />;
	}

	if (partnerTariffQuery.isError) {
		return <ErrorView error={partnerTariffQuery.error} />;
	}

	if (chargerTypeQuery.isError) {
		return <ErrorView error={chargerTypeQuery.error} />;
	}

	return (
		<PartnerTariffUpdateForm
			partnerTariff={partnerTariffQuery.data}
			chargerTypes={chargerTypeQuery.data}
		/>
	);
};
