'use client';

import { LoadingView } from '@/ui/LoadingView';

import { useGetAllPortQuery } from '@/entities/port/port.query';

import { PortBodyView } from './PortBodyView';

export const PortBody = () => {
	const portQuery = useGetAllPortQuery();

	if (portQuery.isPending) {
		return <LoadingView />;
	}

	return <PortBodyView ports={portQuery.data!} />;
};
