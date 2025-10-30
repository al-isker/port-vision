import { Metadata } from 'next';

import { ExchangeGroupById } from '@/screens/exchange-group-by-id/ExchangeGroupById';

export const metadata: Metadata = {
	title: 'Группа зарядных устройств'
};

const ExchangeGroupsByIdPage = () => <ExchangeGroupById />;

export default ExchangeGroupsByIdPage;
