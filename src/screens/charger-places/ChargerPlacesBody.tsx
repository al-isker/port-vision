'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';
import { Pagination } from '@/widgets/pagination/Pagination';

import { LoadingView } from '@/ui/LoadingView';

import { useGetPaginationChargerPlaceQuery } from '@/entities/charger-place/charger-place.query';

import { ChargerPlacesBodyView } from './ChargerPlacesBodyView';

export const ChargerPlacesBody = () => {
	const chargerPlaceQuery = useGetPaginationChargerPlaceQuery();

	if (chargerPlaceQuery.isPending) {
		return <LoadingView />;
	}

	if (chargerPlaceQuery.isError) {
		return <ErrorView error={chargerPlaceQuery.error} />;
	}

	return (
		<>
			<ChargerPlacesBodyView chargerPlaces={chargerPlaceQuery.data.content} />
			<Pagination totalPages={chargerPlaceQuery.data.totalPages} />
		</>
	);
};
