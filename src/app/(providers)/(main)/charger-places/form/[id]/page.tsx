import { Metadata } from 'next';

import { ChargerPlaceUpdate } from '@/screens/charger-place-update/ChargerPlaceUpdate';

export const metadata: Metadata = {
	title: 'Редактирование точки зарядного устройства'
};

const ChargerPlacesFormByIdPage = () => <ChargerPlaceUpdate />;

export default ChargerPlacesFormByIdPage;
