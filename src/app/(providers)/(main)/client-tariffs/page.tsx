import { Metadata } from 'next';

import { ClientTariffs } from '@/screens/client-tariffs/ClientTariffs';

export const metadata: Metadata = {
	title: 'Тарифы клиентов'
};

const ClientTariffsPage = () => <ClientTariffs />;

export default ClientTariffsPage;
