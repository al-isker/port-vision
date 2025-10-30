'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetAllRolePermissionNameQuery } from '@/entities/role/role.query';

import { RoleCreateForm } from './RoleCreateForm';

export const RoleCreate = () => {
	const permissionNameQuery = useGetAllRolePermissionNameQuery();

	if (permissionNameQuery.isPending) {
		return <LoadingView />;
	}

	if (permissionNameQuery.isError) {
		return <ErrorView error={permissionNameQuery.error} />;
	}

	return <RoleCreateForm permissionNames={permissionNameQuery.data} />;
};
