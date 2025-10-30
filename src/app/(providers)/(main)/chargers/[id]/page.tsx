import { Metadata } from 'next';

import { ChargerById } from '@/screens/charger-by-id/ChargerById';

export const metadata: Metadata = {
	title: 'Зарядное устройство'
};

const ChargersByIdPage = () => <ChargerById />;

export default ChargersByIdPage;
