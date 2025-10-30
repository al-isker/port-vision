import { Metadata } from 'next';

import { ChargerCreate } from '@/screens/charger-create/ChargerCreate';

export const metadata: Metadata = {
	title: 'Создание зарядного устройства'
};

const ChargersFormPage = () => <ChargerCreate />;

export default ChargersFormPage;
