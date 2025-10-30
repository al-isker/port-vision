import { Metadata } from 'next';

import { ReportByCharger } from '@/screens/report-by-charger/ReportByCharger';

export const metadata: Metadata = {
	title: 'Отчёт зарядного устройства'
};

const ReportByChargerPage = () => <ReportByCharger />;

export default ReportByChargerPage;
