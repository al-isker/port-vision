import { Metadata } from 'next';

import { PartnerUpdate } from '@/screens/partner-update/PartnerUpdate';

export const metadata: Metadata = {
	title: 'Редактирование партнёра'
};

const PartnersFormByIdPage = () => <PartnerUpdate />;

export default PartnersFormByIdPage;
