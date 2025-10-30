'use client';

import { useRouter } from 'next/navigation';
import { useId } from 'react';

import { useUpdateRoleMutation } from '@/entities/role/role.query';
import { IRole, RoleFormUpdate } from '@/entities/role/role.type';

import { RoleUpdateFormHeader } from './RoleUpdateFormHeader';
import { RoleUpdateFormSchema } from './RoleUpdateFormSchema';

interface Props {
	role: IRole;
}

export const RoleUpdateForm = ({ role }: Props) => {
	const formId = useId();

	const router = useRouter();

	const roleMutation = useUpdateRoleMutation(role.id);

	const handleSubmit = (form: RoleFormUpdate) => {
		roleMutation.mutate(form, {
			onSuccess: () => {
				router.back();
			}
		});
	};

	return (
		<div className='space-y-space h-full'>
			<RoleUpdateFormHeader
				roleName={role.name}
				formId={formId}
				loading={roleMutation.isPending}
			/>
			<RoleUpdateFormSchema
				role={role}
				formId={formId}
				disabled={roleMutation.isPending}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};
