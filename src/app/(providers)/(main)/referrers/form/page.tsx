import { Metadata } from 'next';

import { ReferrerCreate } from '@/screens/referrer-create/ReferrerCreate';

export const metadata: Metadata = {
	title: 'Создание реферрера'
};

const ReferrersFormPage = () => <ReferrerCreate />;

export default ReferrersFormPage;
