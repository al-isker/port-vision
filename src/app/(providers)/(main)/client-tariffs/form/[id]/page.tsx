import { Metadata } from 'next';

import { ClientTariffUpdate } from '@/screens/client-tariff-update/ClientTariffUpdate';

export const metadata: Metadata = {
	title: 'Редактирование тарифа клиента'
};

const ClientTariffsFormByIdPage = () => <ClientTariffUpdate />;

export default ClientTariffsFormByIdPage;
