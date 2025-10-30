import { Metadata } from 'next';

import { RoleById } from '@/screens/role-by-id/RoleById';

export const metadata: Metadata = {
	title: 'Роль'
};

const RolesByIdPage = () => <RoleById />;

export default RolesByIdPage;
