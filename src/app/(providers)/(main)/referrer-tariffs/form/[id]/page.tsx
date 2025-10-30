import { Metadata } from 'next';

import { ReferrerTariffUpdate } from '@/screens/referrer-tariff-update/ReferrerTariffUpdate';

export const metadata: Metadata = {
	title: 'Редактирование тарифа реферрера'
};

const ReferrerTariffsFormByIdPage = () => <ReferrerTariffUpdate />;

export default ReferrerTariffsFormByIdPage;
