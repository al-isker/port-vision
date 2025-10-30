'use client';

import { useSearchParams } from 'next/navigation';

import { useGetReportByReferrerQuery } from '@/entities/report-by-referrer/report-by-referrer.query';
import { ReportByReferrerFormFilters } from '@/entities/report-by-referrer/report-by-referrer.type';

import { useRouterSearchParams } from '@/shared/hooks/useRouterSearchParams';

import { ReportByReferrerFiltersFormSchema } from './ReportByReferrerFiltersFormSchema';

export const ReportByReferrerFiltersForm = () => {
	const searchParams = useSearchParams();

	const routerSearchParams = useRouterSearchParams();

	const reportByReferrerQuery = useGetReportByReferrerQuery();

	const handleSubmit = (form: ReportByReferrerFormFilters) => {
		let isChanged = false;

		Object.entries(form).forEach(([name, value]) => {
			const strValue = String(value);

			if (searchParams.get(name) !== strValue) {
				routerSearchParams.set(name, strValue);

				isChanged = true;
			}
		});

		if (!isChanged) {
			reportByReferrerQuery.refetch();
		}
	};

	return <ReportByReferrerFiltersFormSchema onSubmit={handleSubmit} />;
};
