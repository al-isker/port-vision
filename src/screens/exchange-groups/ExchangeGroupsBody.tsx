'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';
import { Pagination } from '@/widgets/pagination/Pagination';

import { LoadingView } from '@/ui/LoadingView';

import { useGetPaginationExchangeGroupQuery } from '@/entities/exchange-group/exchange-group.query';

import { ExchangeGroupsBodyView } from './ExchangeGroupsBodyView';

export const ExchangeGroupsBody = () => {
	const exchangeGroupQuery = useGetPaginationExchangeGroupQuery();

	if (exchangeGroupQuery.isPending) {
		return <LoadingView />;
	}

	if (exchangeGroupQuery.isError) {
		return <ErrorView error={exchangeGroupQuery.error} />;
	}

	return (
		<>
			<ExchangeGroupsBodyView
				exchangeGroups={exchangeGroupQuery.data.content}
			/>
			<Pagination totalPages={exchangeGroupQuery.data.totalPages} />
		</>
	);
};
