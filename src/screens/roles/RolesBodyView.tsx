'use client';

import Link from 'next/link';

import { Paper } from '@/ui/Paper';
import { Table } from '@/ui/Table';
import { TableBody } from '@/ui/TableBody';
import { TableCell } from '@/ui/TableCell';
import { TableContainer } from '@/ui/TableContainer';
import { TableHead } from '@/ui/TableHead';
import { TableRow } from '@/ui/TableRow';

import { IRole } from '@/entities/role/role.type';

import { ROUTES } from '@/shared/config/routes/routes';

interface Props {
	roles: IRole[];
}

export const RolesBodyView = ({ roles }: Props) => {
	return (
		<Paper className='overflow-hidden' disablePadding>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Название</TableCell>
							<TableCell>Метка</TableCell>
							<TableCell>Описание</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{roles.map(item => (
							<Link
								key={item.id}
								href={ROUTES.roleById(item.id)}
								passHref
								legacyBehavior
							>
								<TableRow hover>
									<TableCell>{item.id}</TableCell>
									<TableCell>{item.name}</TableCell>
									<TableCell>{item.label}</TableCell>
									<TableCell>{item.description}</TableCell>
								</TableRow>
							</Link>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
};
