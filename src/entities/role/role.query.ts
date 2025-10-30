import { keepPreviousData } from '@tanstack/react-query';

import { useMutation } from '@/shared/hooks/useMutation';
import { usePaginationParams } from '@/shared/hooks/usePaginationParams';
import { useQuery } from '@/shared/hooks/useQuery';
import { isEmpty } from '@/shared/utils/checks/is-empty';

import { roleService } from './role.service';
import { RoleFormCreate, RoleFormUpdate } from './role.type';

export const useGetAllRoleQuery = () => {
	return useQuery({
		queryKey: ['role', 'list'],
		queryFn: () => roleService.getAll()
	});
};

export const useGetPaginationRoleQuery = () => {
	const { page } = usePaginationParams();

	return useQuery({
		enabled: !isEmpty(page),
		queryKey: ['role', { page }],
		queryFn: () => roleService.getPagination({ page: page! }),
		placeholderData: keepPreviousData
	});
};

export const useGetByIdRoleQuery = (id?: number) => {
	return useQuery({
		enabled: !isEmpty(id),
		queryKey: ['role', id],
		queryFn: () => roleService.getById(id!)
	});
};

export const useGetAllRolePermissionNameQuery = () => {
	return useQuery({
		queryKey: ['role-permission-name'],
		queryFn: () => roleService.permissionNameGetAll(),
		staleTime: Infinity
	});
};

export const useCreateRoleMutation = () => {
	return useMutation({
		mutationKey: ['role'],
		mutationFn: (data: RoleFormCreate) => roleService.create(data)
	});
};

export const useUpdateRoleMutation = (id: number) => {
	return useMutation({
		mutationKey: ['role'],
		mutationFn: (data: RoleFormUpdate) => roleService.update(id, data)
	});
};

export const useDeleteRoleMutation = (id: number) => {
	return useMutation({
		mutationKey: ['role'],
		mutationFn: () => roleService.delete(id)
	});
};
