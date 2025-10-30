'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetAllChargerPlaceQuery } from '@/entities/charger-place/charger-place.query';
import { useGetAllChargerTypeQuery } from '@/entities/charger-type/charger-type.query';
import { useGetByIdChargerQuery } from '@/entities/charger/charger.query';
import { useGetAllClientTariffQuery } from '@/entities/client-tariff/client-tariff.query';
import { useGetAllExchangeGroupQuery } from '@/entities/exchange-group/exchange-group.query';
import { useGetAllPartnerQuery } from '@/entities/partner/partner.query';
import { useGetAllReferrerQuery } from '@/entities/referrer/referrer.query';

import { useIdParam } from '@/shared/hooks/useIdParam';

import { ChargerUpdateForm } from './ChargerUpdateForm';

export const ChargerUpdate = () => {
	const chargerId = useIdParam();

	const chargerQuery = useGetByIdChargerQuery(chargerId);

	const chargerTypeQuery = useGetAllChargerTypeQuery();

	const partnerQuery = useGetAllPartnerQuery();

	const referrerQuery = useGetAllReferrerQuery();

	const clientTariffQuery = useGetAllClientTariffQuery();

	const exchangeGroupQuery = useGetAllExchangeGroupQuery();

	const chargerPlaceQuery = useGetAllChargerPlaceQuery();

	if (
		chargerQuery.isPending ||
		chargerTypeQuery.isPending ||
		partnerQuery.isPending ||
		referrerQuery.isPending ||
		clientTariffQuery.isPending ||
		exchangeGroupQuery.isPending ||
		chargerPlaceQuery.isPending
	) {
		return <LoadingView />;
	}

	if (chargerQuery.isError) {
		return <ErrorView error={chargerQuery.error} />;
	}

	if (chargerTypeQuery.isError) {
		return <ErrorView error={chargerTypeQuery.error} />;
	}

	if (partnerQuery.isError) {
		return <ErrorView error={partnerQuery.error} />;
	}

	if (referrerQuery.isError) {
		return <ErrorView error={referrerQuery.error} />;
	}

	if (clientTariffQuery.isError) {
		return <ErrorView error={clientTariffQuery.error} />;
	}

	if (exchangeGroupQuery.isError) {
		return <ErrorView error={exchangeGroupQuery.error} />;
	}

	if (chargerPlaceQuery.isError) {
		return <ErrorView error={chargerPlaceQuery.error} />;
	}

	return (
		<ChargerUpdateForm
			charger={chargerQuery.data}
			chargerTypes={chargerTypeQuery.data}
			partners={partnerQuery.data}
			referrers={referrerQuery.data}
			clientTariffs={clientTariffQuery.data}
			exchangeGroups={exchangeGroupQuery.data}
			chargerPlaces={chargerPlaceQuery.data}
		/>
	);
};
