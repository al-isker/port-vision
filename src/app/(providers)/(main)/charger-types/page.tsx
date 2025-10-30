import { Metadata } from 'next';

import { ChargerTypes } from '@/screens/charger-types/ChargerTypes';

export const metadata: Metadata = {
	title: 'Типы зарядных устройств'
};

const ChargerTypesPage = () => <ChargerTypes />;

export default ChargerTypesPage;
