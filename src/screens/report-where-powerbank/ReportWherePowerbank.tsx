'use server';

import { ReportWherePowerbankBody } from './ReportWherePowerbankBody';
import { ReportWherePowerbankFiltersForm } from './ReportWherePowerbankFiltersForm';
import { ReportWherePowerbankHeader } from './ReportWherePowerbankHeader';

export const ReportWherePowerbank = () => {
	return (
		<div className='h-full space-y-space'>
			<ReportWherePowerbankHeader />
			<ReportWherePowerbankFiltersForm />
			<ReportWherePowerbankBody />
		</div>
	);
};
