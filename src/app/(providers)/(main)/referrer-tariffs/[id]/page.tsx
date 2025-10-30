import { Metadata } from 'next';

import { ReferrerTariffById } from '@/screens/referrer-tariff-by-id/ReferrerTariffById';

export const metadata: Metadata = {
	title: 'Тариф реферрера'
};

const ReferrerTariffsByIdPage = () => <ReferrerTariffById />;

export default ReferrerTariffsByIdPage;
