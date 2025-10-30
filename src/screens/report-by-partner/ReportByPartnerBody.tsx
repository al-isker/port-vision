'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetReportByPartnerQuery } from '@/entities/report-by-partner/report-by-partner.query';

import { ReportByPartnerBodyView } from './ReportByPartnerBodyView';

export const ReportByPartnerBody = () => {
	const reportByPartnerQuery = useGetReportByPartnerQuery();

	if (reportByPartnerQuery.isFetching) {
		return <LoadingView />;
	}

	if (reportByPartnerQuery.isError) {
		return <ErrorView error={reportByPartnerQuery.error} />;
	}

	if (reportByPartnerQuery.isSuccess) {
		return (
			<ReportByPartnerBodyView reportByPartner={reportByPartnerQuery.data} />
		);
	}
};
