'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetByIdChargerPlaceQuery } from '@/entities/charger-place/charger-place.query';
import { useGetByIdPartnerQuery } from '@/entities/partner/partner.query';

import { useIdParam } from '@/shared/hooks/useIdParam';

import { ChargerPlaceByIdView } from './ChargerPlaceByIdView';

export const ChargerPlaceById = () => {
	const chargerPlaceId = useIdParam();

	const chargerPlaceQuery = useGetByIdChargerPlaceQuery(chargerPlaceId);

	const partnerQuery = useGetByIdPartnerQuery(
		chargerPlaceQuery.data?.ownerPartnerId
	);

	if (chargerPlaceQuery.isPending || partnerQuery.isLoading) {
		return <LoadingView />;
	}

	if (chargerPlaceQuery.isError) {
		return <ErrorView error={chargerPlaceQuery.error} />;
	}

	if (partnerQuery.isError) {
		return <ErrorView error={partnerQuery.error} />;
	}

	return (
		<ChargerPlaceByIdView
			chargerPlace={chargerPlaceQuery.data}
			partner={partnerQuery.data}
		/>
	);
};
