import Link from 'next/link';

import { Paper } from '@/ui/Paper';
import { Table } from '@/ui/Table';
import { TableBody } from '@/ui/TableBody';
import { TableCell } from '@/ui/TableCell';
import { TableContainer } from '@/ui/TableContainer';
import { TableHead } from '@/ui/TableHead';
import { TableRow } from '@/ui/TableRow';

import { IPartnerTariff } from '@/entities/partner-tariff/partner-tariff.type';

import { ROUTES } from '@/shared/config/routes/routes';
import { getPercentView } from '@/shared/utils/views/percentage-view';

interface Props {
	partnerTariffs: IPartnerTariff[];
}

export const PartnerTariffsBodyView = ({ partnerTariffs }: Props) => {
	return (
		<Paper className='overflow-hidden' disablePadding>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Название</TableCell>
							<TableCell>Процент от продаж</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{partnerTariffs.map(item => (
							<Link
								key={item.id}
								href={ROUTES.partnerTariffById(item.id)}
								passHref
								legacyBehavior
							>
								<TableRow hover>
									<TableCell>{item.id}</TableCell>
									<TableCell>{item.name}</TableCell>
									<TableCell>{getPercentView(item.percentage)}</TableCell>
								</TableRow>
							</Link>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
};
