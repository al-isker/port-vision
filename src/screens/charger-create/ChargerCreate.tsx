'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetAllChargerTypeQuery } from '@/entities/charger-type/charger-type.query';
import { useGetAllClientTariffQuery } from '@/entities/client-tariff/client-tariff.query';
import { useGetAllExchangeGroupQuery } from '@/entities/exchange-group/exchange-group.query';
import { useGetAllPartnerQuery } from '@/entities/partner/partner.query';
import { useGetAllReferrerQuery } from '@/entities/referrer/referrer.query';

import { ChargerCreateForm } from './ChargerCreateForm';

export const ChargerCreate = () => {
	const chargerTypeQuery = useGetAllChargerTypeQuery();

	const partnerQuery = useGetAllPartnerQuery();

	const referrerQuery = useGetAllReferrerQuery();

	const clientTariffQuery = useGetAllClientTariffQuery();

	const exchangeGroupQuery = useGetAllExchangeGroupQuery();

	if (
		chargerTypeQuery.isPending ||
		partnerQuery.isPending ||
		referrerQuery.isPending ||
		clientTariffQuery.isPending ||
		exchangeGroupQuery.isPending
	) {
		return <LoadingView />;
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

	return (
		<ChargerCreateForm
			chargerTypes={chargerTypeQuery.data}
			partners={partnerQuery.data}
			referrers={referrerQuery.data}
			clientTariffs={clientTariffQuery.data}
			exchangeGroups={exchangeGroupQuery.data}
		/>
	);
};
