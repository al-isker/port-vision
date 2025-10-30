'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetByIdClientTariffQuery } from '@/entities/client-tariff/client-tariff.query';

import { useIdParam } from '@/shared/hooks/useIdParam';

import { ClientTariffUpdateForm } from './ClientTariffUpdateForm';

export const ClientTariffUpdate = () => {
	const clientTariffId = useIdParam();

	const partnerQuery = useGetByIdClientTariffQuery(clientTariffId);

	if (partnerQuery.isPending) {
		return <LoadingView />;
	}

	if (partnerQuery.isError) {
		return <ErrorView error={partnerQuery.error} />;
	}

	return <ClientTariffUpdateForm clientTariff={partnerQuery.data} />;
};
