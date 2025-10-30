import { Metadata } from 'next';

import { EmployeeById } from '@/screens/employee-by-id/EmployeeById';

export const metadata: Metadata = {
	title: 'Сотрудник'
};

const EmployeesByIdPage = () => <EmployeeById />;

export default EmployeesByIdPage;
