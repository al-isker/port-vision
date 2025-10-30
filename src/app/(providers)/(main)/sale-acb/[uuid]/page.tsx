import { Metadata } from 'next';

import { SaleAcbByUuid } from '@/screens/sale-acb-by-uuid/SaleAcbByUuid';

export const metadata: Metadata = {
	title: 'Аренда'
};

const SaleAcbByIdPage = () => <SaleAcbByUuid />;

export default SaleAcbByIdPage;
