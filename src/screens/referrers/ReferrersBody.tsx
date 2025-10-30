'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';
import { Pagination } from '@/widgets/pagination/Pagination';

import { LoadingView } from '@/ui/LoadingView';

import { useGetPaginationReferrerQuery } from '@/entities/referrer/referrer.query';

import { ReferrersBodyView } from './ReferrersBodyView';

export const ReferrersBody = () => {
	const referrerQuery = useGetPaginationReferrerQuery();

	if (referrerQuery.isPending) {
		return <LoadingView />;
	}

	if (referrerQuery.isError) {
		return <ErrorView error={referrerQuery.error} />;
	}

	return (
		<>
			<ReferrersBodyView referrers={referrerQuery.data.content} />
			<Pagination totalPages={referrerQuery.data.totalPages} />
		</>
	);
};
