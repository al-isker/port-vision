'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';
import { Pagination } from '@/widgets/pagination/Pagination';

import { LoadingView } from '@/ui/LoadingView';

import { useGetAllChargerTypeQuery } from '@/entities/charger-type/charger-type.query';
import { getChargersMergeType } from '@/entities/charger/charger.merge';
import { useGetPaginationChargerQuery } from '@/entities/charger/charger.query';

import { ChargersBodyView } from './ChargersBodyView';

export const ChargersBody = () => {
	const chargerQuery = useGetPaginationChargerQuery();

	const chargerTypeQuery = useGetAllChargerTypeQuery();

	if (chargerQuery.isPending || chargerTypeQuery.isPending) {
		return <LoadingView />;
	}

	if (chargerQuery.isError) {
		return <ErrorView error={chargerQuery.error} />;
	}

	if (chargerTypeQuery.isError) {
		return <ErrorView error={chargerTypeQuery.error} />;
	}

	const chargersMergeType = getChargersMergeType(
		chargerQuery.data.content,
		chargerTypeQuery.data
	);

	return (
		<>
			<ChargersBodyView chargersMergeType={chargersMergeType} />
			<Pagination totalPages={chargerQuery.data.totalPages} />
		</>
	);
};
