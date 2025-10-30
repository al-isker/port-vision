'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';
import { Pagination } from '@/widgets/pagination/Pagination';

import { LoadingView } from '@/ui/LoadingView';

import { useGetPaginationClientQuery } from '@/entities/client/client.query';

import { ClientsBodyView } from './ClientsBodyView';

export const ClientsBody = () => {
	const clientQuery = useGetPaginationClientQuery();

	if (clientQuery.isPending) {
		return <LoadingView />;
	}

	if (clientQuery.isError) {
		return <ErrorView error={clientQuery.error} />;
	}

	return (
		<>
			<ClientsBodyView clients={clientQuery.data.content} />
			<Pagination totalPages={clientQuery.data.totalPages} />
		</>
	);
};
