'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetByIdPartnerTariffQuery } from '@/entities/partner-tariff/partner-tariff.query';
import { useGetByIdPartnerQuery } from '@/entities/partner/partner.query';
import { useGetByIdReferrerQuery } from '@/entities/referrer/referrer.query';

import { useIdParam } from '@/shared/hooks/useIdParam';

import { PartnerByIdView } from './PartnerByIdView';

export const PartnerById = () => {
	const partnerId = useIdParam();

	const partnerQuery = useGetByIdPartnerQuery(partnerId);

	const partnerTariffQuery = useGetByIdPartnerTariffQuery(
		partnerQuery.data?.tariffId
	);

	const referrerQuery = useGetByIdReferrerQuery(partnerQuery.data?.referrerId);

	if (
		partnerQuery.isPending ||
		partnerTariffQuery.isLoading ||
		referrerQuery.isLoading
	) {
		return <LoadingView />;
	}

	if (partnerQuery.isError) {
		return <ErrorView error={partnerQuery.error} />;
	}

	if (partnerTariffQuery.isError) {
		return <ErrorView error={partnerTariffQuery.error} />;
	}

	if (referrerQuery.isError) {
		return <ErrorView error={referrerQuery.error} />;
	}

	return (
		<PartnerByIdView
			partner={partnerQuery.data}
			partnerTariff={partnerTariffQuery.data}
			referrer={referrerQuery.data}
		/>
	);
};
