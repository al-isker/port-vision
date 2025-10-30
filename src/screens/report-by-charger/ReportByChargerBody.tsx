'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetReportByChargerQuery } from '@/entities/report-by-charger/report-by-charger.query';

import { ReportByChargerBodyView } from './ReportByChargerBodyView';

export const ReportByChargerBody = () => {
	const reportByChargerQuery = useGetReportByChargerQuery();

	if (reportByChargerQuery.isFetching) {
		return <LoadingView />;
	}

	if (reportByChargerQuery.isError) {
		return <ErrorView error={reportByChargerQuery.error} />;
	}

	if (reportByChargerQuery.isSuccess) {
		return (
			<ReportByChargerBodyView reportByCharger={reportByChargerQuery.data} />
		);
	}
};
