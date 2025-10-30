'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetAllChargerQuery } from '@/entities/charger/charger.query';
import { useGetByIdExchangeGroupQuery } from '@/entities/exchange-group/exchange-group.query';

import { useIdParam } from '@/shared/hooks/useIdParam';

import { ExchangeGroupUpdateForm } from './ExchangeGroupUpdateForm';

export const ExchangeGroupUpdate = () => {
	const exchangeGroupId = useIdParam();

	const exchangeGroupQuery = useGetByIdExchangeGroupQuery(exchangeGroupId);

	const chargerQuery = useGetAllChargerQuery();

	if (exchangeGroupQuery.isPending || chargerQuery.isPending) {
		return <LoadingView />;
	}

	if (exchangeGroupQuery.isError) {
		return <ErrorView error={exchangeGroupQuery.error} />;
	}

	if (chargerQuery.isError) {
		return <ErrorView error={chargerQuery.error} />;
	}

	return (
		<ExchangeGroupUpdateForm
			exchangeGroup={exchangeGroupQuery.data}
			chargers={chargerQuery.data}
		/>
	);
};
