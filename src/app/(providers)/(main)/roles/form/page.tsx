import { Metadata } from 'next';

import { RoleCreate } from '@/screens/role-create/RoleCreate';

export const metadata: Metadata = {
	title: 'Создание роли'
};

const RolesFormPage = () => <RoleCreate />;

export default RolesFormPage;
