import { Control } from 'react-hook-form';

import { RHFCheckbox } from '@/smart-ui/checkbox/RHFCheckbox';

import { FormBody } from '@/ui/FormBody';
import { FormHeader } from '@/ui/FormHeader';
import { FormSection } from '@/ui/FormSection';
import { Table } from '@/ui/Table';
import { TableBody } from '@/ui/TableBody';
import { TableCell } from '@/ui/TableCell';
import { TableHead } from '@/ui/TableHead';
import { TableRow } from '@/ui/TableRow';

import { IPermissionName, RoleFormCreate } from '@/entities/role/role.type';

interface Props {
	number: number;
	permissionNames: IPermissionName[];
	control: Control<RoleFormCreate>;
	disabled?: boolean;
}

export const RoleCreateFormSchemaPermissions = ({
	number,
	permissionNames,
	control,
	disabled
}: Props) => {
	return (
		<FormSection>
			<FormHeader number={number} title='Разрешения' />

			<FormBody>
				<Table size='small' disablePadding>
					<TableHead>
						<TableRow>
							<TableCell>Название</TableCell>
							<TableCell align='right'>Просмотр</TableCell>
							<TableCell align='right'>Изменение</TableCell>
							<TableCell align='right'>Удаление</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{permissionNames.map((item, index) => (
							<TableRow key={item.name}>
								<TableCell>{item.label}</TableCell>
								<TableCell align='right'>
									<RHFCheckbox
										className='-mx-1.5 p-1.5'
										name={`permissions.${index}.readable`}
										control={control}
										disabled={disabled}
									/>
								</TableCell>
								<TableCell align='right'>
									<RHFCheckbox
										className='-mx-1.5 p-1.5'
										name={`permissions.${index}.writeable`}
										control={control}
										disabled={disabled}
									/>
								</TableCell>
								<TableCell align='right'>
									<RHFCheckbox
										className='-mx-1.5 p-1.5'
										name={`permissions.${index}.deletable`}
										control={control}
										disabled={disabled}
									/>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</FormBody>
		</FormSection>
	);
};
