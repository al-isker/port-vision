import { Metadata } from 'next';

import { ChargerPlaces } from '@/screens/charger-places/ChargerPlaces';

export const metadata: Metadata = {
	title: 'Точки зарядных устройств'
};

const ChargerPlacesPage = () => <ChargerPlaces />;

export default ChargerPlacesPage;
