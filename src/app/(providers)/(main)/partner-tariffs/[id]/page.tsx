import { Metadata } from 'next';

import { PartnerTariffById } from '@/screens/partner-tariff-by-id/PartnerTariffById';

export const metadata: Metadata = {
	title: 'Тарифы партнёров'
};

const PartnerTariffsByIdPage = () => <PartnerTariffById />;

export default PartnerTariffsByIdPage;
