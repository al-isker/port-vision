import { Metadata } from 'next';

import { ChargersOnMap } from '@/screens/chargers-on-map/ChargersOnMap';

export const metadata: Metadata = {
	title: 'Карта зарядных устройств'
};

const ChargersOnMapPage = () => <ChargersOnMap />;

export default ChargersOnMapPage;
