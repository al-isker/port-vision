'use client';

import { useRouter } from 'next/navigation';
import { useId } from 'react';

import { useCreateRoleMutation } from '@/entities/role/role.query';
import { IPermissionName, RoleFormCreate } from '@/entities/role/role.type';

import { RoleCreateFormHeader } from './RoleCreateFormHeader';
import { RoleCreateFormSchema } from './RoleCreateFormSchema';

interface Props {
	permissionNames: IPermissionName[];
}

export const RoleCreateForm = ({ permissionNames }: Props) => {
	const formId = useId();

	const router = useRouter();

	const roleMutation = useCreateRoleMutation();

	const handleSubmit = (form: RoleFormCreate) => {
		roleMutation.mutate(form, {
			onSuccess: () => {
				router.back();
			}
		});
	};

	return (
		<div className='space-y-space h-full'>
			<RoleCreateFormHeader formId={formId} loading={roleMutation.isPending} />

			<RoleCreateFormSchema
				permissionNames={permissionNames}
				formId={formId}
				disabled={roleMutation.isPending}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};
