'use client';

import Link from 'next/link';

import { Paper } from '@/ui/Paper';
import { Table } from '@/ui/Table';
import { TableBody } from '@/ui/TableBody';
import { TableCell } from '@/ui/TableCell';
import { TableContainer } from '@/ui/TableContainer';
import { TableHead } from '@/ui/TableHead';
import { TableRow } from '@/ui/TableRow';

import { IClientTariff } from '@/entities/client-tariff/client-tariff.type';

import { ROUTES } from '@/shared/config/routes/routes';
import { getRublesView } from '@/shared/utils/views/rubles-view';

interface Props {
	clientTariffs: IClientTariff[];
}

export const ClientTariffsBodyView = ({ clientTariffs }: Props) => {
	return (
		<Paper className='overflow-hidden' disablePadding>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Название</TableCell>
							<TableCell>Цена за первый час</TableCell>
							<TableCell>Цена после первого часа</TableCell>
							<TableCell>Штраф</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{clientTariffs.map(item => (
							<Link
								key={item.id}
								href={ROUTES.clientTariffById(item.id)}
								passHref
								legacyBehavior
							>
								<TableRow hover>
									<TableCell>{item.id}</TableCell>
									<TableCell>{item.name}</TableCell>
									<TableCell>{getRublesView(item.priceFirstHour)}</TableCell>
									<TableCell>{getRublesView(item.priceNext)}</TableCell>
									<TableCell>{getRublesView(item.penalty)}</TableCell>
								</TableRow>
							</Link>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
};
