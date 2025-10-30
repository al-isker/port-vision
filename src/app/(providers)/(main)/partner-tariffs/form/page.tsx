import { Metadata } from 'next';

import { PartnerTariffCreate } from '@/screens/partner-tariff-create/PartnerTariffCreate';

export const metadata: Metadata = {
	title: 'Создание тарифа партнёра'
};

const PartnerTariffsFormPage = () => <PartnerTariffCreate />;

export default PartnerTariffsFormPage;
