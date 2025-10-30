import { Metadata } from 'next';

import { ReferrerById } from '@/screens/referrer-by-id/ReferrerById';

export const metadata: Metadata = {
	title: 'Реферрер'
};

const ReferrersByIdPage = () => <ReferrerById />;

export default ReferrersByIdPage;
