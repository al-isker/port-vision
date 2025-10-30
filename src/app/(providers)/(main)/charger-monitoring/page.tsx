import { Metadata } from 'next';

import { ChargerMonitoring } from '@/screens/charger-monitoring/ChargerMonitoring';

export const metadata: Metadata = {
	title: 'Мониторинг'
};

const ChargerMonitoringPage = () => <ChargerMonitoring />;

export default ChargerMonitoringPage;
