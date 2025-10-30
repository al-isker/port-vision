import { Metadata } from 'next';

import { ChargerTypeCreate } from '@/screens/charger-type-create/ChargerTypeCreate';

export const metadata: Metadata = {
	title: 'Создание типа зарядного устройства'
};

const ChargerTypesFormPage = () => <ChargerTypeCreate />;

export default ChargerTypesFormPage;
