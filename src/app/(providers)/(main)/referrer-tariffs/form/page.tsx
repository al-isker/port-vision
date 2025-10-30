import { Metadata } from 'next';

import { ReferrerTariffCreate } from '@/screens/referrer-tariff-create/ReferrerTariffCreate';

export const metadata: Metadata = {
	title: 'Создание тарифа реферрера'
};

const ReferrerTariffsFormPage = () => <ReferrerTariffCreate />;

export default ReferrerTariffsFormPage;
