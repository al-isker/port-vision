'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetByIdClientTariffQuery } from '@/entities/client-tariff/client-tariff.query';

import { useIdParam } from '@/shared/hooks/useIdParam';

import { ClientTariffByIdView } from './ClientTariffByIdView';

export const ClientTariffById = () => {
	const clientTariffId = useIdParam();

	const clientTariffQuery = useGetByIdClientTariffQuery(clientTariffId);

	if (clientTariffQuery.isPending) {
		return <LoadingView />;
	}

	if (clientTariffQuery.isError) {
		return <ErrorView error={clientTariffQuery.error} />;
	}

	return <ClientTariffByIdView clientTariff={clientTariffQuery.data} />;
};
