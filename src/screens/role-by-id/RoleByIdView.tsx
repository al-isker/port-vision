'use client';

import { MapView } from '@/ui/MapView';
import { MapViewRow } from '@/ui/MapViewItem';
import { Paper } from '@/ui/Paper';
import { ReadonlyCheckbox } from '@/ui/ReadonlyCheckbox';
import { Table } from '@/ui/Table';
import { TableBody } from '@/ui/TableBody';
import { TableCell } from '@/ui/TableCell';
import { TableContainer } from '@/ui/TableContainer';
import { TableHead } from '@/ui/TableHead';
import { TableRow } from '@/ui/TableRow';

import { IRole } from '@/entities/role/role.type';

import { RoleByIdViewHeader } from './RoleByIdViewHeader';

interface Props {
	role: IRole;
}

export const RoleByIdView = ({ role }: Props) => {
	return (
		<div className='h-full space-y-space'>
			<RoleByIdViewHeader roleId={role.id} roleName={role.name} />

			<div className='grid grid-cols-3 gap-6'>
				<Paper>
					<MapView title='Основные данные'>
						<MapViewRow label='ID'>{role.id}</MapViewRow>
						<MapViewRow label='Название'>{role.name}</MapViewRow>
						<MapViewRow label='Метка'>{role.label}</MapViewRow>
						<MapViewRow label='Описание'>{role.description}</MapViewRow>
					</MapView>
				</Paper>

				<Paper className='col-span-2'>
					<MapView title='Разрешения'>
						<TableContainer>
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
									{role.permissions.map(item => (
										<TableRow key={item.name}>
											<TableCell>{item.description}</TableCell>
											<TableCell align='right'>
												<ReadonlyCheckbox checked={item.readable} />
											</TableCell>
											<TableCell align='right'>
												<ReadonlyCheckbox checked={item.writeable} />
											</TableCell>
											<TableCell align='right'>
												<ReadonlyCheckbox checked={item.deletable} />
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</MapView>
				</Paper>
			</div>
		</div>
	);
};
