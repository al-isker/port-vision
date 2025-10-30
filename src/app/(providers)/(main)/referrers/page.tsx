import { Metadata } from 'next';

import { Referrers } from '@/screens/referrers/Referrers';

export const metadata: Metadata = {
	title: 'Реферреры'
};

const ReferrersPage = () => <Referrers />;

export default ReferrersPage;
