import { SyntheticEvent } from 'react';

import { Tab, Tabs } from '@mui/material';

import { useGetSearchParams } from '@/shared/hooks/useGetSearchParams';
import { useRouterSearchParams } from '@/shared/hooks/useRouterSearchParams';

export const PortTabs = () => {
	const { tab } = useGetSearchParams('tab');

	const routerSearchParams = useRouterSearchParams();

	const handleChange = (_: SyntheticEvent<Element, Event>, value: string) => {
		routerSearchParams.set('tab', value);
	};

	return (
		<Tabs value={tab} variant='scrollable' onChange={handleChange}>
			<Tab value='water' label='Загрязнение воды' />
			<Tab value='air' label='Загрязнение воздуха' />
			<Tab value='ship' label='Частота судозаходов' />
		</Tabs>
	);
};
