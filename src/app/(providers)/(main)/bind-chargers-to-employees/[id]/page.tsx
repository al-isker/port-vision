import { Metadata } from 'next';

import { BindChargersToEmployeeUpdate } from '@/screens/bind-chargers-to-employee-update/BindChargersToEmployeeUpdate';

export const metadata: Metadata = {
	title: 'Привязки зарядных устройств к сотруднику'
};

const BindChargersToEmployeeByIdPage = () => <BindChargersToEmployeeUpdate />;

export default BindChargersToEmployeeByIdPage;
