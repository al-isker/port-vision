import { Metadata } from 'next';

import { Chargers } from '@/screens/chargers/Chargers';

export const metadata: Metadata = {
	title: 'Зарядные устройства'
};

const ChargersPage = () => <Chargers />;

export default ChargersPage;
