'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';
import { Pagination } from '@/widgets/pagination/Pagination';

import { LoadingView } from '@/ui/LoadingView';

import { useGetPaginationEmployeeQuery } from '@/entities/employee/employee.query';

import { EmployeesBodyView } from './EmployeesBodyView';

export const EmployeesBody = () => {
	const employeeQuery = useGetPaginationEmployeeQuery();

	if (employeeQuery.isPending) {
		return <LoadingView />;
	}

	if (employeeQuery.isError) {
		return <ErrorView error={employeeQuery.error} />;
	}

	return (
		<>
			<EmployeesBodyView employees={employeeQuery.data.content} />
			<Pagination totalPages={employeeQuery.data.totalPages} />
		</>
	);
};
