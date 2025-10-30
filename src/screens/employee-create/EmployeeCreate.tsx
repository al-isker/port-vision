'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetAllRoleQuery } from '@/entities/role/role.query';

import { EmployeeCreateForm } from './EmployeeCreateForm';

export const EmployeeCreate = () => {
	const roleQuery = useGetAllRoleQuery();

	if (roleQuery.isPending) {
		return <LoadingView />;
	}

	if (roleQuery.isError) {
		return <ErrorView error={roleQuery.error} />;
	}

	return <EmployeeCreateForm roles={roleQuery.data} />;
};
