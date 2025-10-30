'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetReportWherePowerbankQuery } from '@/entities/report-where-powerbank/report-where-powerbank.query';

import { ReportWherePowerbankBodyView } from './ReportWherePowerbankBodyView';

export const ReportWherePowerbankBody = () => {
	const reportWherePowerbankQuery = useGetReportWherePowerbankQuery();

	if (reportWherePowerbankQuery.isFetching) {
		return <LoadingView />;
	}

	if (reportWherePowerbankQuery.isError) {
		return <ErrorView error={reportWherePowerbankQuery.error} />;
	}

	if (reportWherePowerbankQuery.isSuccess) {
		return (
			<ReportWherePowerbankBodyView
				reportWherePowerbank={reportWherePowerbankQuery.data}
			/>
		);
	}
};
