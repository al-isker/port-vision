import { Metadata } from 'next';

import { Clients } from '@/screens/clients/Clients';

export const metadata: Metadata = {
	title: 'Клиенты'
};

const ClientsPage = () => <Clients />;

export default ClientsPage;
