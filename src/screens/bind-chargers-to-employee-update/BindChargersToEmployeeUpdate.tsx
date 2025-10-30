'use client';

import { ErrorView } from '@/widgets/error-view/ErrorView';

import { LoadingView } from '@/ui/LoadingView';

import { useGetAllChargerQuery } from '@/entities/charger/charger.query';
import { useGetByIdEmployeeQuery } from '@/entities/employee/employee.query';

import { useIdParam } from '@/shared/hooks/useIdParam';

import { BindChargersToEmployeeUpdateForm } from './BindChargersToEmployeeUpdateForm';

export const BindChargersToEmployeeUpdate = () => {
	const employeeId = useIdParam();

	const employeeQuery = useGetByIdEmployeeQuery(employeeId);

	const chargerQuery = useGetAllChargerQuery();

	if (chargerQuery.isPending || employeeQuery.isPending) {
		return <LoadingView />;
	}

	if (chargerQuery.isError) {
		return <ErrorView error={chargerQuery.error} />;
	}

	if (employeeQuery.isError) {
		return <ErrorView error={employeeQuery.error} />;
	}

	return (
		<BindChargersToEmployeeUpdateForm
			employee={employeeQuery.data}
			chargers={chargerQuery.data}
		/>
	);
};
