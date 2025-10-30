'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetByIdEmployeeQuery } from '@/entities/employee/employee.query';
import { useGetByIdRoleQuery } from '@/entities/role/role.query';

import { useIdParam } from '@/shared/hooks/useIdParam';

import { EmployeeByIdView } from './EmployeeByIdView';

export const EmployeeById = () => {
	const employeeId = useIdParam();

	const employeeQuery = useGetByIdEmployeeQuery(employeeId);

	const roleQuery = useGetByIdRoleQuery(employeeQuery.data?.roleId);

	if (employeeQuery.isPending || roleQuery.isLoading) {
		return <LoadingView />;
	}

	if (employeeQuery.isError) {
		return <ErrorView error={employeeQuery.error} />;
	}

	if (roleQuery.isError) {
		return <ErrorView error={roleQuery.error} />;
	}

	return (
		<EmployeeByIdView employee={employeeQuery.data} role={roleQuery.data} />
	);
};
