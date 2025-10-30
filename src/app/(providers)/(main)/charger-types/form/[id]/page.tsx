import { Metadata } from 'next';

import { ChargerTypeUpdate } from '@/screens/charger-type-update/ChargerTypeUpdate';

export const metadata: Metadata = {
	title: 'Редактирование типа зарядного устройства'
};

const ChargerTypesFormByIdPage = () => <ChargerTypeUpdate />;

export default ChargerTypesFormByIdPage;
