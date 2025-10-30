'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetByIdEmployeeQuery } from '@/entities/employee/employee.query';
import { useGetAllRoleQuery } from '@/entities/role/role.query';

import { useIdParam } from '@/shared/hooks/useIdParam';

import { EmployeeUpdateForm } from './EmployeeUpdateForm';

export const EmployeeUpdate = () => {
	const employeeId = useIdParam();

	const employeeQuery = useGetByIdEmployeeQuery(employeeId);

	const roleQuery = useGetAllRoleQuery();

	if (employeeQuery.isPending || roleQuery.isPending) {
		return <LoadingView />;
	}

	if (employeeQuery.isError) {
		return <ErrorView error={employeeQuery.error} />;
	}

	if (roleQuery.isError) {
		return <ErrorView error={roleQuery.error} />;
	}

	return (
		<EmployeeUpdateForm employee={employeeQuery.data} roles={roleQuery.data} />
	);
};
