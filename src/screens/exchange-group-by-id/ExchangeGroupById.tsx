'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetByIdExchangeGroupQuery } from '@/entities/exchange-group/exchange-group.query';

import { useIdParam } from '@/shared/hooks/useIdParam';

import { ExchangeGroupByIdView } from './ExchangeGroupByIdView';

export const ExchangeGroupById = () => {
	const exchangeGroupId = useIdParam();

	const exchangeGroupQuery = useGetByIdExchangeGroupQuery(exchangeGroupId);

	if (exchangeGroupQuery.isPending) {
		return <LoadingView />;
	}

	if (exchangeGroupQuery.isError) {
		return <ErrorView error={exchangeGroupQuery.error} />;
	}

	return <ExchangeGroupByIdView exchangeGroup={exchangeGroupQuery.data} />;
};
