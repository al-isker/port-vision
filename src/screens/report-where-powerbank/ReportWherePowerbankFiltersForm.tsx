'use client';

import { useSearchParams } from 'next/navigation';

import { useGetReportWherePowerbankQuery } from '@/entities/report-where-powerbank/report-where-powerbank.query';
import { ReportWherePowerbankFormFilters } from '@/entities/report-where-powerbank/report-where-powerbank.type';

import { useRouterSearchParams } from '@/shared/hooks/useRouterSearchParams';

import { ReportWherePowerbankFiltersFormSchema } from './ReportWherePowerbankFiltersFormSchema';

export const ReportWherePowerbankFiltersForm = () => {
	const searchParams = useSearchParams();

	const routerSearchParams = useRouterSearchParams();

	const reportWherePowerbankQuery = useGetReportWherePowerbankQuery();

	const handleSubmit = (form: ReportWherePowerbankFormFilters) => {
		let isChanged = false;

		Object.entries(form).forEach(([name, value]) => {
			const strValue = String(value);

			if (searchParams.get(name) !== strValue) {
				routerSearchParams.set(name, strValue);

				isChanged = true;
			}
		});

		if (!isChanged) {
			reportWherePowerbankQuery.refetch();
		}
	};

	return <ReportWherePowerbankFiltersFormSchema onSubmit={handleSubmit} />;
};
