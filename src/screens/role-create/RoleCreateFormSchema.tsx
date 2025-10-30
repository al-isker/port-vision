'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { IPermissionName, RoleFormCreate } from '@/entities/role/role.type';
import { roleFormCreateSchema } from '@/entities/role/role.zod';

import { RoleCreateFormSchemaMain } from './RoleCreateFormSchemaMain';
import { RoleCreateFormSchemaPermissions } from './RoleCreateFormSchemaPermissions';

interface Props {
	permissionNames: IPermissionName[];
	formId: string;
	disabled?: boolean;
	onSubmit: SubmitHandler<RoleFormCreate>;
}

export const RoleCreateFormSchema = ({
	permissionNames,
	formId,
	disabled,
	onSubmit
}: Props) => {
	const { control, handleSubmit } = useForm<RoleFormCreate>({
		defaultValues: {
			permissions: permissionNames.map(item => ({
				name: item.name,
				readable: false,
				writeable: false,
				deletable: false
			}))
		},
		resolver: zodResolver(roleFormCreateSchema)
	});

	return (
		<form
			id={formId}
			className='space-y-space'
			onSubmit={handleSubmit(onSubmit)}
		>
			<RoleCreateFormSchemaMain
				number={1}
				control={control}
				disabled={disabled}
			/>

			<RoleCreateFormSchemaPermissions
				number={2}
				permissionNames={permissionNames}
				control={control}
				disabled={disabled}
			/>
		</form>
	);
};
