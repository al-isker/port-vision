'use client';

import { useSearchParams } from 'next/navigation';

import { useGetReportByPartnerQuery } from '@/entities/report-by-partner/report-by-partner.query';
import { ReportByPartnerFormFilters } from '@/entities/report-by-partner/report-by-partner.type';

import { useRouterSearchParams } from '@/shared/hooks/useRouterSearchParams';

import { ReportByPartnerFiltersFormSchema } from './ReportByPartnerFiltersFormSchema';

export const ReportByPartnerFiltersForm = () => {
	const searchParams = useSearchParams();

	const routerSearchParams = useRouterSearchParams();

	const reportByPartnerQuery = useGetReportByPartnerQuery();

	const handleSubmit = (form: ReportByPartnerFormFilters) => {
		let isChanged = false;

		Object.entries(form).forEach(([name, value]) => {
			const strValue = String(value);

			if (searchParams.get(name) !== strValue) {
				routerSearchParams.set(name, strValue);

				isChanged = true;
			}
		});

		if (!isChanged) {
			reportByPartnerQuery.refetch();
		}
	};

	return <ReportByPartnerFiltersFormSchema onSubmit={handleSubmit} />;
};
