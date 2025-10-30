import { Metadata } from 'next';

import { ReferrerUpdate } from '@/screens/referrer-update/ReferrerUpdate';

export const metadata: Metadata = {
	title: 'Редактирование реферрера'
};

const ReferrersFormByIdPage = () => <ReferrerUpdate />;

export default ReferrersFormByIdPage;
