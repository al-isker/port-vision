import { Metadata } from 'next';

import { ExchangeGroupCreate } from '@/screens/exchange-group-create/ExchangeGroupCreate';

export const metadata: Metadata = {
	title: 'Создание группы зарядных устройств'
};

const ExchangeGroupsFormPage = () => <ExchangeGroupCreate />;

export default ExchangeGroupsFormPage;
