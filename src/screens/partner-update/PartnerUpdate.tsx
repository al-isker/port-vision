'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetAllPartnerTariffQuery } from '@/entities/partner-tariff/partner-tariff.query';
import { useGetByIdPartnerQuery } from '@/entities/partner/partner.query';
import { useGetAllReferrerQuery } from '@/entities/referrer/referrer.query';

import { useIdParam } from '@/shared/hooks/useIdParam';

import { PartnerUpdateForm } from './PartnerUpdateForm';

export const PartnerUpdate = () => {
	const partnerId = useIdParam();

	const partnerQuery = useGetByIdPartnerQuery(partnerId);

	const partnerTariffQuery = useGetAllPartnerTariffQuery();

	const referrerQuery = useGetAllReferrerQuery();

	if (
		partnerQuery.isPending ||
		partnerTariffQuery.isPending ||
		referrerQuery.isPending
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
		<PartnerUpdateForm
			partner={partnerQuery.data}
			partnerTariffs={partnerTariffQuery.data}
			referrers={referrerQuery.data}
		/>
	);
};
