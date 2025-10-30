'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetByIdChargerPlaceQuery } from '@/entities/charger-place/charger-place.query';
import { useGetAllPartnerQuery } from '@/entities/partner/partner.query';

import { useIdParam } from '@/shared/hooks/useIdParam';

import { ChargerPlaceUpdateForm } from './ChargerPlaceUpdateForm';

export const ChargerPlaceUpdate = () => {
	const chargerPlaceId = useIdParam();

	const chargerPlaceQuery = useGetByIdChargerPlaceQuery(chargerPlaceId);

	const partnerQuery = useGetAllPartnerQuery();

	if (chargerPlaceQuery.isPending || partnerQuery.isPending) {
		return <LoadingView />;
	}

	if (chargerPlaceQuery.isError) {
		return <ErrorView error={chargerPlaceQuery.error} />;
	}

	if (partnerQuery.isError) {
		return <ErrorView error={partnerQuery.error} />;
	}

	return (
		<ChargerPlaceUpdateForm
			chargerPlace={chargerPlaceQuery.data}
			partners={partnerQuery.data}
		/>
	);
};
