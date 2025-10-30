import { Metadata } from 'next';

import { ExchangeGroups } from '@/screens/exchange-groups/ExchangeGroups';

export const metadata: Metadata = {
	title: 'Группы зарядных устройств'
};

const ExchangeGroupsPage = () => <ExchangeGroups />;

export default ExchangeGroupsPage;
