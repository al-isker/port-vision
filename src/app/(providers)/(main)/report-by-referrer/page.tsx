import { Metadata } from 'next';

import { ReportByReferrer } from '@/screens/report-by-referrer/ReportByReferrer';

export const metadata: Metadata = {
	title: 'Взаиморасчёты реферрера'
};

const ReportByReferrerPage = () => <ReportByReferrer />;

export default ReportByReferrerPage;
