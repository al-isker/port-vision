import { Metadata } from 'next';

import { ChargerPlaceCreate } from '@/screens/charger-place-create/ChargerPlaceCreate';

export const metadata: Metadata = {
	title: 'Создание точки зарядных устройств'
};

const ChargerPlacesFormPage = () => <ChargerPlaceCreate />;

export default ChargerPlacesFormPage;
