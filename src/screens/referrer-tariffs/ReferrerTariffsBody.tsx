'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';
import { Pagination } from '@/widgets/pagination/Pagination';

import { LoadingView } from '@/ui/LoadingView';

import { useGetPaginationReferrerTariffQuery } from '@/entities/referrer-tariff/referrer-tariff.query';

import { ReferrerTariffsBodyView } from './ReferrerTariffsBodyView';

export const ReferrerTariffsBody = () => {
	const referrerTariffsQuery = useGetPaginationReferrerTariffQuery();

	if (referrerTariffsQuery.isPending) {
		return <LoadingView />;
	}

	if (referrerTariffsQuery.isError) {
		return <ErrorView error={referrerTariffsQuery.error} />;
	}

	return (
		<>
			<ReferrerTariffsBodyView
				referrerTariffs={referrerTariffsQuery.data.content}
			/>
			<Pagination totalPages={referrerTariffsQuery.data.totalPages} />
		</>
	);
};
