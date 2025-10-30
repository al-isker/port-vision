import { Metadata } from 'next';

import { ClientTariffById } from '@/screens/client-tariff-by-id/ClientTariffById';

export const metadata: Metadata = {
	title: 'Тариф клиента'
};

const ClientTariffsByIdPage = () => <ClientTariffById />;

export default ClientTariffsByIdPage;
