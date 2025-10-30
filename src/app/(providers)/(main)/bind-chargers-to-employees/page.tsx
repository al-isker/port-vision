import { Metadata } from 'next';

import { BindChargersToEmployees } from '@/screens/bind-chargers-to-employees/BindChargersToEmployees';

export const metadata: Metadata = {
	title: 'Привязки зарядных устройств к сотрудникам'
};

const BindChargersToEmployeesPage = () => <BindChargersToEmployees />;

export default BindChargersToEmployeesPage;
