import { Metadata } from 'next';

import { ClientCreate } from '@/screens/client-create/ClientCreate';

export const metadata: Metadata = {
	title: 'Создание клиента'
};

const ClientsFormPage = () => <ClientCreate />;

export default ClientsFormPage;
