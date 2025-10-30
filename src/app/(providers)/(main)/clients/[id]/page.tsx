import { Metadata } from 'next';

import { ClientById } from '@/screens/client-by-id/ClientById';

export const metadata: Metadata = {
	title: 'Клиент'
};

const ClientsByIdPage = () => <ClientById />;

export default ClientsByIdPage;
