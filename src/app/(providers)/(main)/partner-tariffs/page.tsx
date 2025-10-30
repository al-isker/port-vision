import { Metadata } from 'next';

import { PartnerTariffs } from '@/screens/partner-tariffs/PartnerTariffs';

export const metadata: Metadata = {
	title: 'Тарифа партнёров'
};

const PartnerTariffsPage = () => <PartnerTariffs />;

export default PartnerTariffsPage;
