import { Metadata } from 'next';

import { ExchangeGroupUpdate } from '@/screens/exchange-group-update/ExchangeGroupUpdate';

export const metadata: Metadata = {
	title: 'Редактирование группы зарядных устройств'
};

const ExchangeGroupsFormByIdPage = () => <ExchangeGroupUpdate />;

export default ExchangeGroupsFormByIdPage;
