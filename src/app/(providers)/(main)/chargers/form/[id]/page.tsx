import { Metadata } from 'next';

import { ChargerUpdate } from '@/screens/charger-update/ChargerUpdate';

export const metadata: Metadata = {
	title: 'Редактирование зарядного устройства'
};

const ChargersFormByIdPage = () => <ChargerUpdate />;

export default ChargersFormByIdPage;
