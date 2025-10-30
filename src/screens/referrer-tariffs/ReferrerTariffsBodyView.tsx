'use client';

import Link from 'next/link';

import { Paper } from '@/ui/Paper';
import { Table } from '@/ui/Table';
import { TableBody } from '@/ui/TableBody';
import { TableCell } from '@/ui/TableCell';
import { TableContainer } from '@/ui/TableContainer';
import { TableHead } from '@/ui/TableHead';
import { TableRow } from '@/ui/TableRow';

import { IReferrerTariff } from '@/entities/referrer-tariff/referrer-tariff.type';

import { ROUTES } from '@/shared/config/routes/routes';
import { getPercentView } from '@/shared/utils/views/percentage-view';
import { getYesNoView } from '@/shared/utils/views/yes-no-view';

interface Props {
	referrerTariffs: IReferrerTariff[];
}

export const ReferrerTariffsBodyView = ({ referrerTariffs }: Props) => {
	return (
		<Paper className='overflow-hidden' disablePadding>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Название</TableCell>
							<TableCell>Процент от продаж</TableCell>
							<TableCell>Активный</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{referrerTariffs.map(item => (
							<Link
								key={item.id}
								href={ROUTES.referrerTariffById(item.id)}
								passHref
								legacyBehavior
							>
								<TableRow hover>
									<TableCell>{item.id}</TableCell>
									<TableCell>{item.name}</TableCell>
									<TableCell>{getPercentView(item.percentage)}</TableCell>
									<TableCell>{getYesNoView(item.active)}</TableCell>
								</TableRow>
							</Link>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
};
