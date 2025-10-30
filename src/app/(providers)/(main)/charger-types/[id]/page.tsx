import { Metadata } from 'next';

import { ChargerTypeById } from '@/screens/charger-type-by-id/ChargerTypeById';

export const metadata: Metadata = {
	title: 'Тип зарядного устройства'
};

const ChargerTypesByIdPage = () => <ChargerTypeById />;

export default ChargerTypesByIdPage;
