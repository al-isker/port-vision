'use server';

import { SetPaginationParamsScript } from '@/shared/utils/url/SetPaginationParamsScript';

import { EmployeesBody } from './EmployeesBody';
import { EmployeesHeader } from './EmployeesHeader';

export const Employees = () => (
	<div className='space-y-space h-full'>
		<EmployeesHeader />
		<EmployeesBody />
		<SetPaginationParamsScript />
	</div>
);
