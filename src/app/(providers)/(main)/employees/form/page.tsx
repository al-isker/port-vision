import { Metadata } from 'next';

import { EmployeeCreate } from '@/screens/employee-create/EmployeeCreate';

export const metadata: Metadata = {
	title: 'Создание сотрудника'
};

const EmployeesFormPage = () => <EmployeeCreate />;

export default EmployeesFormPage;
