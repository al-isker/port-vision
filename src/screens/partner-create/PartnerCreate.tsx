'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetAllPartnerTariffQuery } from '@/entities/partner-tariff/partner-tariff.query';
import { useGetAllReferrerQuery } from '@/entities/referrer/referrer.query';

import { PartnerCreateForm } from './PartnerCreateForm';

export const PartnerCreate = () => {
	const partnerTariffQuery = useGetAllPartnerTariffQuery();

	const referrerQuery = useGetAllReferrerQuery();

	if (partnerTariffQuery.isPending || referrerQuery.isPending) {
		return <LoadingView />;
	}

	if (partnerTariffQuery.isError) {
		return <ErrorView error={partnerTariffQuery.error} />;
	}

	if (referrerQuery.isError) {
		return <ErrorView error={referrerQuery.error} />;
	}

	return (
		<PartnerCreateForm
			partnerTariffs={partnerTariffQuery.data}
			referrers={referrerQuery.data}
		/>
	);
};
