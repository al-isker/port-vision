'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';
import { Paper } from '@/ui/Paper';

import { useGetAllPortQuery } from '@/entities/port/port.query';

import { PortBodyView } from './PortBodyView';
import { PortTabs } from './PortTabs';

export const PortBody = () => {
	const portQuery = useGetAllPortQuery();

	if (portQuery.isPending) {
		return <LoadingView />;
	}

	if (portQuery.isError) {
		return <ErrorView error={portQuery.error} />;
	}

	return (
		<Paper>
			<PortTabs />
			<PortBodyView ports={portQuery.data} />
		</Paper>
	);
};
