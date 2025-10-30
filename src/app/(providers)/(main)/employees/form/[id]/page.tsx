import { Metadata } from 'next';

import { EmployeeUpdate } from '@/screens/employee-update/EmployeeUpdate';

export const metadata: Metadata = {
	title: 'Редактирование сотрудника'
};

const EmployeesFormByIdPage = () => <EmployeeUpdate />;

export default EmployeesFormByIdPage;
