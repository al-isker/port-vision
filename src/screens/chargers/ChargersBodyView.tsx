'use client';

import Link from 'next/link';

import { Paper } from '@/ui/Paper';
import { Table } from '@/ui/Table';
import { TableBody } from '@/ui/TableBody';
import { TableCell } from '@/ui/TableCell';
import { TableContainer } from '@/ui/TableContainer';
import { TableHead } from '@/ui/TableHead';
import { TableRow } from '@/ui/TableRow';

import { IChargerMergeType } from '@/entities/charger/charger.type';
import { getChargerStatusView } from '@/entities/charger/charger.view';

import { ROUTES } from '@/shared/config/routes/routes';

interface Props {
	chargersMergeType: IChargerMergeType[];
}

export const ChargersBodyView = ({ chargersMergeType }: Props) => {
	return (
		<Paper className='overflow-hidden' disablePadding>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Название</TableCell>
							<TableCell>Модель</TableCell>
							<TableCell>Статус</TableCell>
							<TableCell>Тип</TableCell>
							<TableCell>Адрес</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{chargersMergeType.map(item => (
							<Link
								key={item.id}
								href={ROUTES.chargerById(item.id)}
								passHref
								legacyBehavior
							>
								<TableRow hover>
									<TableCell>{item.id}</TableCell>
									<TableCell>{item.name}</TableCell>
									<TableCell>{item.model}</TableCell>
									<TableCell>{getChargerStatusView(item.status)}</TableCell>
									<TableCell>{item.type?.name}</TableCell>
									<TableCell>{item.address}</TableCell>
								</TableRow>
							</Link>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
};
