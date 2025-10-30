'use client';

import Link from 'next/link';

import { Paper } from '@/ui/Paper';
import { Table } from '@/ui/Table';
import { TableBody } from '@/ui/TableBody';
import { TableCell } from '@/ui/TableCell';
import { TableContainer } from '@/ui/TableContainer';
import { TableHead } from '@/ui/TableHead';
import { TableRow } from '@/ui/TableRow';

import { IChargerType } from '@/entities/charger-type/charger-type.type';

import { ROUTES } from '@/shared/config/routes/routes';

interface Props {
	chargerTypes: IChargerType[];
}

export const ChargerTypesBodyView = ({ chargerTypes }: Props) => {
	return (
		<Paper className='overflow-hidden' disablePadding>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Название</TableCell>
							<TableCell>Кол-во слотов</TableCell>
							<TableCell>Опции</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{chargerTypes.map(item => (
							<Link
								key={item.id}
								href={ROUTES.chargerTypeById(item.id)}
								passHref
								legacyBehavior
							>
								<TableRow hover>
									<TableCell>{item.id}</TableCell>
									<TableCell>{item.name}</TableCell>
									<TableCell>{item.slotCount}</TableCell>
									<TableCell>{item.options}</TableCell>
								</TableRow>
							</Link>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
};
