'use client';

import Link from 'next/link';

import { Paper } from '@/ui/Paper';
import { Table } from '@/ui/Table';
import { TableBody } from '@/ui/TableBody';
import { TableCell } from '@/ui/TableCell';
import { TableContainer } from '@/ui/TableContainer';
import { TableHead } from '@/ui/TableHead';
import { TableRow } from '@/ui/TableRow';

import { IChargerPlace } from '@/entities/charger-place/charger-place.type';

import { ROUTES } from '@/shared/config/routes/routes';
import { getRublesView } from '@/shared/utils/views/rubles-view';

interface Props {
	chargerPlaces: IChargerPlace[];
}

export const ChargerPlacesBodyView = ({ chargerPlaces }: Props) => {
	return (
		<Paper className='overflow-hidden' disablePadding>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Адрес</TableCell>
							<TableCell>Сумма аренды</TableCell>
							<TableCell>Комментарий</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{chargerPlaces.map(item => (
							<Link
								key={item.id}
								href={ROUTES.chargerPlaceById(item.id)}
								passHref
								legacyBehavior
							>
								<TableRow hover>
									<TableCell>{item.id}</TableCell>
									<TableCell>{item.address}</TableCell>
									<TableCell>{getRublesView(item.rentAmount)}</TableCell>
									<TableCell>{item.locationHint}</TableCell>
								</TableRow>
							</Link>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
};
