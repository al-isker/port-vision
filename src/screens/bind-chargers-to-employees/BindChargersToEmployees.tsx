'use server';

import { SetPaginationParamsScript } from '@/shared/utils/url/SetPaginationParamsScript';

import { BindChargersToEmployeesBody } from './BindChargersToEmployeesBody';
import { BindChargersToEmployeesHeader } from './BindChargersToEmployeesHeader';

export const BindChargersToEmployees = () => (
	<div className='space-y-space h-full'>
		<BindChargersToEmployeesHeader />
		<BindChargersToEmployeesBody />
		<SetPaginationParamsScript />
	</div>
);
