import { Metadata } from 'next';

import { ReportByPartner } from '@/screens/report-by-partner/ReportByPartner';

export const metadata: Metadata = {
	title: 'Взаиморасчёты партнёра'
};

const ReportByPartnerPage = () => <ReportByPartner />;

export default ReportByPartnerPage;
