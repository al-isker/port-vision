'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';
import { Pagination } from '@/widgets/pagination/Pagination';

import { LoadingView } from '@/ui/LoadingView';

import { useGetPaginationRoleQuery } from '@/entities/role/role.query';

import { RolesBodyView } from './RolesBodyView';

export const RolesBody = () => {
	const roleQuery = useGetPaginationRoleQuery();

	if (roleQuery.isPending) {
		return <LoadingView />;
	}

	if (roleQuery.isError) {
		return <ErrorView error={roleQuery.error} />;
	}

	return (
		<>
			<RolesBodyView roles={roleQuery.data.content} />
			<Pagination totalPages={roleQuery.data.totalPages} />
		</>
	);
};
