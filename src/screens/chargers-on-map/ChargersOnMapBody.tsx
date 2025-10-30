'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetAllChargerQuery } from '@/entities/charger/charger.query';

import { ChargersOnMapBodyView } from './ChargersOnMapBodyView';

export const ChargersOnMapBody = () => {
	const chargerQuery = useGetAllChargerQuery();

	if (chargerQuery.isPending) {
		return <LoadingView />;
	}

	if (chargerQuery.isError) {
		return <ErrorView error={chargerQuery.error} />;
	}

	return <ChargersOnMapBodyView chargers={chargerQuery.data} />;
};
