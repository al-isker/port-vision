'use server';

import { ReportByReferrerBody } from './ReportByReferrerBody';
import { ReportByReferrerFiltersForm } from './ReportByReferrerFiltersForm';
import { ReportByReferrerHeader } from './ReportByReferrerHeader';

export const ReportByReferrer = () => {
	return (
		<div className='h-full space-y-space'>
			<ReportByReferrerHeader />
			<ReportByReferrerFiltersForm />
			<ReportByReferrerBody />
		</div>
	);
};
