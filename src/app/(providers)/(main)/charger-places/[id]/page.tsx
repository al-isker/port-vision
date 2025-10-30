import { Metadata } from 'next';

import { ChargerPlaceById } from '@/screens/charger-place-by-id/ChargerPlaceById';

export const metadata: Metadata = {
	title: 'Точка зарядных устройств'
};

const ChargerPlacesByIdPage = () => <ChargerPlaceById />;

export default ChargerPlacesByIdPage;
