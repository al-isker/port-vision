import { Metadata } from 'next';

import { Partners } from '@/screens/partners/Partners';

export const metadata: Metadata = {
	title: 'Партнёры'
};

const PartnersPage = () => <Partners />;

export default PartnersPage;
