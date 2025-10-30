import { Metadata } from 'next';

import { ClientUpdate } from '@/screens/client-update/ClientUpdate';

export const metadata: Metadata = {
	title: 'Редактирование клиента'
};

const ClientsFormByIdPage = () => <ClientUpdate />;

export default ClientsFormByIdPage;
