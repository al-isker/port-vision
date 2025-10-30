'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';
import { Pagination } from '@/widgets/pagination/Pagination';

import { LoadingView } from '@/ui/LoadingView';

import { useGetPaginationPartnerTariffQuery } from '@/entities/partner-tariff/partner-tariff.query';

import { PartnerTariffsBodyView } from './PartnerTariffsBodyView';

export const PartnerTariffsBody = () => {
	const partnerTariffQuery = useGetPaginationPartnerTariffQuery();

	if (partnerTariffQuery.isPending) {
		return <LoadingView />;
	}

	if (partnerTariffQuery.isError) {
		return <ErrorView error={partnerTariffQuery.error} />;
	}

	return (
		<>
			<PartnerTariffsBodyView
				partnerTariffs={partnerTariffQuery.data.content}
			/>
			<Pagination totalPages={partnerTariffQuery.data.totalPages} />
		</>
	);
};
