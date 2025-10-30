import { Metadata } from 'next';

import { ClientTariffCreate } from '@/screens/client-tariff-create/ClientTariffCreate';

export const metadata: Metadata = {
	title: 'Создание тарифа клиента'
};

const ClientTariffsFormPage = () => <ClientTariffCreate />;

export default ClientTariffsFormPage;
