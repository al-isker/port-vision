'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { IRole, RoleFormUpdate } from '@/entities/role/role.type';
import { roleFormUpdateSchema } from '@/entities/role/role.zod';

import { RoleUpdateFormSchemaMain } from './RoleUpdateFormSchemaMain';
import { RoleUpdateFormSchemaPermissions } from './RoleUpdateFormSchemaPermissions';

interface Props {
	role: IRole;
	formId: string;
	disabled?: boolean;
	onSubmit: SubmitHandler<RoleFormUpdate>;
}

export const RoleUpdateFormSchema = ({
	role,
	formId,
	disabled,
	onSubmit
}: Props) => {
	const { control, handleSubmit } = useForm<RoleFormUpdate>({
		defaultValues: role,
		resolver: zodResolver(roleFormUpdateSchema)
	});

	return (
		<form
			id={formId}
			className='space-y-space'
			onSubmit={handleSubmit(onSubmit)}
		>
			<RoleUpdateFormSchemaMain
				number={1}
				control={control}
				disabled={disabled}
			/>

			<RoleUpdateFormSchemaPermissions
				number={2}
				control={control}
				role={role}
				disabled={disabled}
			/>
		</form>
	);
};
