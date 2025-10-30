'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetByIdReferrerTariffQuery } from '@/entities/referrer-tariff/referrer-tariff.query';
import { useGetByIdReferrerQuery } from '@/entities/referrer/referrer.query';

import { useIdParam } from '@/shared/hooks/useIdParam';

import { ReferrerByIdView } from './ReferrerByIdView';

export const ReferrerById = () => {
	const referrerId = useIdParam();

	const referrerQuery = useGetByIdReferrerQuery(referrerId);

	const referrerTariffQuery = useGetByIdReferrerTariffQuery(
		referrerQuery.data?.tariffId
	);

	if (referrerQuery.isPending || referrerTariffQuery.isLoading) {
		return <LoadingView />;
	}

	if (referrerQuery.isError) {
		return <ErrorView error={referrerQuery.error} />;
	}

	if (referrerTariffQuery.isError) {
		return <ErrorView error={referrerTariffQuery.error} />;
	}

	return (
		<ReferrerByIdView
			referrer={referrerQuery.data}
			referrerTariff={referrerTariffQuery.data}
		/>
	);
};
