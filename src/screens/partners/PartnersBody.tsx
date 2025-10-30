'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';
import { Pagination } from '@/widgets/pagination/Pagination';

import { LoadingView } from '@/ui/LoadingView';

import { useGetPaginationPartnerQuery } from '@/entities/partner/partner.query';

import { PartnersBodyView } from './PartnersBodyView';

export const PartnersBody = () => {
	const partnerQuery = useGetPaginationPartnerQuery();

	if (partnerQuery.isPending) {
		return <LoadingView />;
	}

	if (partnerQuery.isError) {
		return <ErrorView error={partnerQuery.error} />;
	}

	return (
		<>
			<PartnersBodyView partners={partnerQuery.data.content} />
			<Pagination totalPages={partnerQuery.data.totalPages} />
		</>
	);
};
