'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetByIdChargerTypeQuery } from '@/entities/charger-type/charger-type.query';

import { useIdParam } from '@/shared/hooks/useIdParam';

import { ChargerTypeUpdateForm } from './ChargerTypeUpdateForm';

export const ChargerTypeUpdate = () => {
	const chargerTypeId = useIdParam();

	const chargerTypeQuery = useGetByIdChargerTypeQuery(chargerTypeId);

	if (chargerTypeQuery.isPending) {
		return <LoadingView />;
	}

	if (chargerTypeQuery.isError) {
		return <ErrorView error={chargerTypeQuery.error} />;
	}

	return <ChargerTypeUpdateForm chargerType={chargerTypeQuery.data} />;
};
