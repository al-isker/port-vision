'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetByIdRoleQuery } from '@/entities/role/role.query';

import { useIdParam } from '@/shared/hooks/useIdParam';

import { RoleUpdateForm } from './RoleUpdateForm';

export const RoleUpdate = () => {
	const roleId = useIdParam();

	const roleQuery = useGetByIdRoleQuery(roleId);

	if (roleQuery.isPending) {
		return <LoadingView />;
	}

	if (roleQuery.isError) {
		return <ErrorView error={roleQuery.error} />;
	}

	return <RoleUpdateForm role={roleQuery.data} />;
};
