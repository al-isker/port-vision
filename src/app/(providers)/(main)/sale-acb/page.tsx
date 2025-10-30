import { Metadata } from 'next';

import { SaleAcb } from '@/screens/sale-acb/SaleAcb';

export const metadata: Metadata = {
	title: 'Аренды'
};

const SaleAcbPage = () => <SaleAcb />;

export default SaleAcbPage;
