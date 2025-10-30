'use server';

import { ReportByChargerBody } from './ReportByChargerBody';
import { ReportByChargerFiltersForm } from './ReportByChargerFiltersForm';
import { ReportByChargerHeader } from './ReportByChargerHeader';

export const ReportByCharger = () => {
	return (
		<div className='h-full space-y-space'>
			<ReportByChargerHeader />
			<ReportByChargerFiltersForm />
			<ReportByChargerBody />
		</div>
	);
};
