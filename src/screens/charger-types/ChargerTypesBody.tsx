'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';
import { Pagination } from '@/widgets/pagination/Pagination';

import { LoadingView } from '@/ui/LoadingView';

import { useGetPaginationChargerTypeQuery } from '@/entities/charger-type/charger-type.query';

import { ChargerTypesBodyView } from './ChargerTypesBodyView';

export const ChargerTypesBody = () => {
	const chargerTypeQuery = useGetPaginationChargerTypeQuery();

	if (chargerTypeQuery.isPending) {
		return <LoadingView />;
	}

	if (chargerTypeQuery.isError) {
		return <ErrorView error={chargerTypeQuery.error} />;
	}

	return (
		<>
			<ChargerTypesBodyView chargerTypes={chargerTypeQuery.data.content} />
			<Pagination totalPages={chargerTypeQuery.data.totalPages} />
		</>
	);
};
