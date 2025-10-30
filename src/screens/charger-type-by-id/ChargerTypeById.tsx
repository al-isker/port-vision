'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetByIdChargerTypeQuery } from '@/entities/charger-type/charger-type.query';

import { useIdParam } from '@/shared/hooks/useIdParam';

import { ChargerTypeByIdView } from './ChargerTypeByIdView';

export const ChargerTypeById = () => {
	const chargerTypeId = useIdParam();

	const chargerTypeQuery = useGetByIdChargerTypeQuery(chargerTypeId);

	if (chargerTypeQuery.isPending) {
		return <LoadingView />;
	}

	if (chargerTypeQuery.isError) {
		return <ErrorView error={chargerTypeQuery.error} />;
	}

	return <ChargerTypeByIdView chargerType={chargerTypeQuery.data} />;
};
