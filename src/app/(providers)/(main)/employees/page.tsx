import { Metadata } from 'next';

import { Employees } from '@/screens/employees/Employees';

export const metadata: Metadata = {
	title: 'Сотрудники'
};

const EmployeesPage = () => <Employees />;

export default EmployeesPage;
