import { Metadata } from 'next';

import { Roles } from '@/screens/roles/Roles';

export const metadata: Metadata = {
	title: 'Роли'
};

const RolesPage = () => <Roles />;

export default RolesPage;
