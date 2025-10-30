'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetByIdReferrerTariffQuery } from '@/entities/referrer-tariff/referrer-tariff.query';

import { useIdParam } from '@/shared/hooks/useIdParam';

import { ReferrerTariffByIdView } from './ReferrerTariffByIdView';

export const ReferrerTariffById = () => {
	const referrerTariffId = useIdParam();

	const referrerTariffQuery = useGetByIdReferrerTariffQuery(referrerTariffId);

	if (referrerTariffQuery.isPending) {
		return <LoadingView />;
	}

	if (referrerTariffQuery.isError) {
		return <ErrorView error={referrerTariffQuery.error} />;
	}

	return <ReferrerTariffByIdView referrerTariff={referrerTariffQuery.data} />;
};
