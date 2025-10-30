'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetReportByReferrerQuery } from '@/entities/report-by-referrer/report-by-referrer.query';

import { ReportByReferrerBodyView } from './ReportByReferrerBodyView';

export const ReportByReferrerBody = () => {
	const reportByReferrerQuery = useGetReportByReferrerQuery();

	if (reportByReferrerQuery.isFetching) {
		return <LoadingView />;
	}

	if (reportByReferrerQuery.isError) {
		return <ErrorView error={reportByReferrerQuery.error} />;
	}

	if (reportByReferrerQuery.isSuccess) {
		return (
			<ReportByReferrerBodyView reportByReferrer={reportByReferrerQuery.data} />
		);
	}
};
