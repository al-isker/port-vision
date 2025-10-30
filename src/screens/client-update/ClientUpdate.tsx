'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetByIdClientQuery } from '@/entities/client/client.query';

import { useIdParam } from '@/shared/hooks/useIdParam';

import { ClientUpdateForm } from './ClientUpdateForm';

export const ClientUpdate = () => {
	const clientId = useIdParam();

	const clientQuery = useGetByIdClientQuery(clientId);

	if (clientQuery.isPending) {
		return <LoadingView />;
	}

	if (clientQuery.isError) {
		return <ErrorView error={clientQuery.error} />;
	}

	return <ClientUpdateForm client={clientQuery.data} />;
};
