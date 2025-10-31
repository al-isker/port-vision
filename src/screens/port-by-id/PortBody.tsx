'use client';

import { useParams } from 'next/navigation';

import { LoadingView } from '@/ui/LoadingView';

import { useGetByIdPortQuery } from '@/entities/port/port.query';

import { PortBodyView } from './PortBodyView';

export const PortBody = () => {
	const { id } = useParams();

	const portByIdQuery = useGetByIdPortQuery(Number(id));

	if (portByIdQuery.isPending) {
		return <LoadingView />;
	}

	return <PortBodyView port={portByIdQuery.data!} />;
};
