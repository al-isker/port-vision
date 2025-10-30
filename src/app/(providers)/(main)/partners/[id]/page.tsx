import { Metadata } from 'next';

import { PartnerById } from '@/screens/partner-by-id/PartnerById';

export const metadata: Metadata = {
	title: 'Партнёр'
};

const PartnersByIdPage = () => <PartnerById />;

export default PartnersByIdPage;
