'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetByIdChargerTypeQuery } from '@/entities/charger-type/charger-type.query';
import { useGetByIdChargerQuery } from '@/entities/charger/charger.query';
import { useGetByIdClientTariffQuery } from '@/entities/client-tariff/client-tariff.query';
import { useGetByIdPartnerQuery } from '@/entities/partner/partner.query';
import { useGetByIdReferrerQuery } from '@/entities/referrer/referrer.query';

import { useIdParam } from '@/shared/hooks/useIdParam';

import { ChargerByIdView } from './ChargerByIdView';

export const ChargerById = () => {
	const chargerId = useIdParam();

	const chargerQuery = useGetByIdChargerQuery(chargerId);

	const chargerTypeQuery = useGetByIdChargerTypeQuery(
		chargerQuery.data?.typeId
	);

	const partnerQuery = useGetByIdPartnerQuery(chargerQuery.data?.partnerId);

	const referrerQuery = useGetByIdReferrerQuery(chargerQuery.data?.referrerId);

	const clientTariffQuery = useGetByIdClientTariffQuery(
		chargerQuery.data?.clientTariffId
	);

	if (
		chargerQuery.isPending ||
		chargerTypeQuery.isLoading ||
		partnerQuery.isLoading ||
		referrerQuery.isLoading ||
		clientTariffQuery.isLoading
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

	return (
		<ChargerByIdView
			charger={chargerQuery.data}
			chargerType={chargerTypeQuery.data}
			partner={partnerQuery.data}
			referrer={referrerQuery.data}
			clientTariff={clientTariffQuery.data}
		/>
	);
};
