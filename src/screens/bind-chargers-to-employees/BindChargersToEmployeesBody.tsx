'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';
import { Pagination } from '@/widgets/pagination/Pagination';

import { LoadingView } from '@/ui/LoadingView';

import { useGetPaginationEmployeeQuery } from '@/entities/employee/employee.query';

import { BindChargersToEmployeesBodyView } from './BindChargersToEmployeesBodyView';

export const BindChargersToEmployeesBody = () => {
	const employeeQuery = useGetPaginationEmployeeQuery();

	if (employeeQuery.isPending) {
		return <LoadingView />;
	}

	if (employeeQuery.isError) {
		return <ErrorView error={employeeQuery.error} />;
	}

	return (
		<>
			<BindChargersToEmployeesBodyView employees={employeeQuery.data.content} />
			<Pagination totalPages={employeeQuery.data.totalPages} />
		</>
	);
};
