'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetAllChargerTypeQuery } from '@/entities/charger-type/charger-type.query';

import { PartnerTariffCreateForm } from './PartnerTariffCreateForm';

export const PartnerTariffCreate = () => {
	const chargerTypeQuery = useGetAllChargerTypeQuery();

	if (chargerTypeQuery.isPending) {
		return <LoadingView />;
	}

	if (chargerTypeQuery.isError) {
		return <ErrorView error={chargerTypeQuery.error} />;
	}

	return <PartnerTariffCreateForm chargerTypes={chargerTypeQuery.data} />;
};
