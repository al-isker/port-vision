import { Metadata } from 'next';

import { PartnerCreate } from '@/screens/partner-create/PartnerCreate';

export const metadata: Metadata = {
	title: 'Создание партнёра'
};

const PartnersFormPage = () => <PartnerCreate />;

export default PartnersFormPage;
