import { Metadata } from 'next';

import { ChargerMonitoringById } from '@/screens/charger-monitoring-by-id/ChargerMonitoringById';

export const metadata: Metadata = {
	title: 'Мониторинг'
};

const ChargerMonitoringByIdPage = () => <ChargerMonitoringById />;

export default ChargerMonitoringByIdPage;
