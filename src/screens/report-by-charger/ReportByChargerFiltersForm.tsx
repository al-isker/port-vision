'use client';

import { useSearchParams } from 'next/navigation';

import { useGetReportByChargerQuery } from '@/entities/report-by-charger/report-by-charger.query';
import { ReportByChargerFormFilters } from '@/entities/report-by-charger/report-by-charger.type';

import { useRouterSearchParams } from '@/shared/hooks/useRouterSearchParams';

import { ReportByChargerFiltersFormSchema } from './ReportByChargerFiltersFormSchema';

export const ReportByChargerFiltersForm = () => {
	const searchParams = useSearchParams();

	const routerSearchParams = useRouterSearchParams();

	const reportByChargerQuery = useGetReportByChargerQuery();

	const handleSubmit = (form: ReportByChargerFormFilters) => {
		let isChanged = false;

		Object.entries(form).forEach(([name, value]) => {
			const strValue = String(value);

			if (searchParams.get(name) !== strValue) {
				routerSearchParams.set(name, strValue);

				isChanged = true;
			}
		});

		if (!isChanged) {
			reportByChargerQuery.refetch();
		}
	};

	return <ReportByChargerFiltersFormSchema onSubmit={handleSubmit} />;
};
