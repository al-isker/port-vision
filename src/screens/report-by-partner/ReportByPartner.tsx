'use server';

import { ReportByPartnerBody } from './ReportByPartnerBody';
import { ReportByPartnerFiltersForm } from './ReportByPartnerFiltersForm';
import { ReportByPartnerHeader } from './ReportByPartnerHeader';

export const ReportByPartner = () => {
	return (
		<div className='h-full space-y-space'>
			<ReportByPartnerHeader />
			<ReportByPartnerFiltersForm />
			<ReportByPartnerBody />
		</div>
	);
};
