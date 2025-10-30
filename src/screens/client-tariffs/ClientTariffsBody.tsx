'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';
import { Pagination } from '@/widgets/pagination/Pagination';

import { LoadingView } from '@/ui/LoadingView';

import { useGetPaginationClientTariffQuery } from '@/entities/client-tariff/client-tariff.query';

import { ClientTariffsBodyView } from './ClientTariffsBodyView';

export const ClientTariffsBody = () => {
	const clientTariffQuery = useGetPaginationClientTariffQuery();

	if (clientTariffQuery.isPending) {
		return <LoadingView />;
	}

	if (clientTariffQuery.isError) {
		return <ErrorView error={clientTariffQuery.error} />;
	}

	return (
		<>
			<ClientTariffsBodyView clientTariffs={clientTariffQuery.data.content} />
			<Pagination totalPages={clientTariffQuery.data.totalPages} />
		</>
	);
};
