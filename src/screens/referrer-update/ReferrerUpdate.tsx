'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetAllReferrerTariffQuery } from '@/entities/referrer-tariff/referrer-tariff.query';
import { useGetByIdReferrerQuery } from '@/entities/referrer/referrer.query';

import { useIdParam } from '@/shared/hooks/useIdParam';

import { ReferrerUpdateForm } from './ReferrerUpdateForm';

export const ReferrerUpdate = () => {
	const referrerId = useIdParam();

	const referrerQuery = useGetByIdReferrerQuery(referrerId);

	const referrerTariffQuery = useGetAllReferrerTariffQuery();

	if (referrerTariffQuery.isPending) {
		return <LoadingView />;
	}

	if (referrerTariffQuery.isError) {
		return <ErrorView error={referrerTariffQuery.error} />;
	}

	if (referrerQuery.isPending) {
		return <LoadingView />;
	}

	if (referrerQuery.isError) {
		return <ErrorView error={referrerQuery.error} />;
	}

	return (
		<ReferrerUpdateForm
			referrer={referrerQuery.data}
			referrerTariffs={referrerTariffQuery.data}
		/>
	);
};
