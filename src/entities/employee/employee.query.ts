import { keepPreviousData } from '@tanstack/react-query';

import { useMutation } from '@/shared/hooks/useMutation';
import { usePaginationParams } from '@/shared/hooks/usePaginationParams';
import { useQuery } from '@/shared/hooks/useQuery';
import { isEmpty } from '@/shared/utils/checks/is-empty';

import { employeeService } from './employee.service';
import { EmployeeFormCreate, EmployeeFormUpdate } from './employee.type';

export const useGetAllEmployeeQuery = () => {
	return useQuery({
		queryKey: ['employee', 'list'],
		queryFn: () => employeeService.getAll()
	});
};

export const useGetPaginationEmployeeQuery = () => {
	const { page } = usePaginationParams();

	return useQuery({
		enabled: !isEmpty(page),
		queryKey: ['employee', { page }],
		queryFn: () => employeeService.getPagination({ page: page! }),
		placeholderData: keepPreviousData
	});
};

export const useGetByIdEmployeeQuery = (id?: number) => {
	return useQuery({
		enabled: !isEmpty(id),
		queryKey: ['employee', id],
		queryFn: () => employeeService.getById(id!)
	});
};

export const useCreateEmployeeMutation = () => {
	return useMutation({
		mutationKey: ['employee'],
		mutationFn: (data: EmployeeFormCreate) => employeeService.create(data)
	});
};

export const useUpdateEmployeeMutation = (id: number) => {
	return useMutation({
		mutationKey: ['employee'],
		mutationFn: (data: EmployeeFormUpdate) => employeeService.update(id, data)
	});
};

export const useDeleteEmployeeMutation = (id: number) => {
	return useMutation({
		mutationKey: ['employee'],
		mutationFn: () => employeeService.delete(id)
	});
};
