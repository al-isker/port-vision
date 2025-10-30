import { Metadata } from 'next';

import { RoleUpdate } from '@/screens/role-update/RoleUpdate';

export const metadata: Metadata = {
	title: 'Редактирование роли'
};

const RolesFormByIdPage = () => <RoleUpdate />;

export default RolesFormByIdPage;
