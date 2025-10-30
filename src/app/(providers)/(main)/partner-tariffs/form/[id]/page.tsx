import { Metadata } from 'next';

import { PartnerTariffUpdate } from '@/screens/partner-tariff-update/PartnerTariffUpdate';

export const metadata: Metadata = {
	title: 'Редактирование тарифа партнёра'
};

const PartnerTariffsFormByIdPage = () => <PartnerTariffUpdate />;

export default PartnerTariffsFormByIdPage;
