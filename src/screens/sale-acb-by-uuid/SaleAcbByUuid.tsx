'use client';

import { useParams } from 'next/navigation';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetByIdChargerQuery } from '@/entities/charger/charger.query';
import { useGetByIdClientTariffQuery } from '@/entities/client-tariff/client-tariff.query';
import { useGetByIdClientQuery } from '@/entities/client/client.query';
import { useGetByIdPartnerQuery } from '@/entities/partner/partner.query';
import { useGetByIdReferrerQuery } from '@/entities/referrer/referrer.query';
import { useGetByUuidSaleAcbQuery } from '@/entities/sale-acb/sale-acb.query';

import { SaleAcbByUuidView } from './SaleAcbByUuidView';

export const SaleAcbByUuid = () => {
	const saleAcbUuid = useParams().uuid.toString();

	const saleAcbQuery = useGetByUuidSaleAcbQuery(saleAcbUuid);

	const clientQuery = useGetByIdClientQuery(saleAcbQuery.data?.clientId);

	const partnerQuery = useGetByIdPartnerQuery(saleAcbQuery.data?.partnerId);

	const referrerQuery = useGetByIdReferrerQuery(saleAcbQuery.data?.referrerId);

	const startChargerQuery = useGetByIdChargerQuery(
		saleAcbQuery.data?.startChargerId
	);

	const stopChargerQuery = useGetByIdChargerQuery(
		saleAcbQuery.data?.stopChargerId
	);

	const clientTariffQuery = useGetByIdClientTariffQuery(
		saleAcbQuery.data?.clientTariffId
	);

	if (
		saleAcbQuery.isPending ||
		clientQuery.isLoading ||
		partnerQuery.isLoading ||
		referrerQuery.isLoading ||
		startChargerQuery.isLoading ||
		stopChargerQuery.isLoading ||
		clientTariffQuery.isLoading
	) {
		return <LoadingView />;
	}

	if (saleAcbQuery.isError) {
		return <ErrorView error={saleAcbQuery.error} />;
	}

	if (clientQuery.isError) {
		return <ErrorView error={clientQuery.error} />;
	}

	if (partnerQuery.isError) {
		return <ErrorView error={partnerQuery.error} />;
	}

	if (referrerQuery.isError) {
		return <ErrorView error={referrerQuery.error} />;
	}

	if (startChargerQuery.isError) {
		return <ErrorView error={startChargerQuery.error} />;
	}

	if (stopChargerQuery.isError) {
		return <ErrorView error={stopChargerQuery.error} />;
	}

	if (clientTariffQuery.isError) {
		return <ErrorView error={clientTariffQuery.error} />;
	}

	return (
		<SaleAcbByUuidView
			saleAcb={saleAcbQuery.data}
			client={clientQuery.data}
			partner={partnerQuery.data}
			referrer={referrerQuery.data}
			startCharger={startChargerQuery.data}
			stopCharger={stopChargerQuery.data}
			clientTariff={clientTariffQuery.data}
		/>
	);
};
