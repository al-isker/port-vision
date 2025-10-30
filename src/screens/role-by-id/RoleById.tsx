'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetByIdRoleQuery } from '@/entities/role/role.query';

import { useIdParam } from '@/shared/hooks/useIdParam';

import { RoleByIdView } from './RoleByIdView';

export const RoleById = () => {
	const roleId = useIdParam();

	const roleQuery = useGetByIdRoleQuery(roleId);

	if (roleQuery.isPending) {
		return <LoadingView />;
	}

	if (roleQuery.isError) {
		return <ErrorView error={roleQuery.error} />;
	}

	return <RoleByIdView role={roleQuery.data} />;
};
