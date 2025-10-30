'use client';

import Link from 'next/link';

import { Paper } from '@/ui/Paper';
import { Table } from '@/ui/Table';
import { TableBody } from '@/ui/TableBody';
import { TableCell } from '@/ui/TableCell';
import { TableContainer } from '@/ui/TableContainer';
import { TableHead } from '@/ui/TableHead';
import { TableRow } from '@/ui/TableRow';

import { ISaleAcbItem } from '@/entities/sale-acb/sale-acb.type';
import { getSaleAcbStatusView } from '@/entities/sale-acb/sale-acb.view';

import { ROUTES } from '@/shared/config/routes/routes';
import { getDateView } from '@/shared/utils/views/date-view';
import { getPhoneView } from '@/shared/utils/views/phone-view';
import { getRublesView } from '@/shared/utils/views/rubles-view';

interface Props {
	saleAcb: ISaleAcbItem[];
}

export const SaleAcbBodyView = ({ saleAcb }: Props) => {
	return (
		<Paper className='overflow-hidden' disablePadding>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Выдан</TableCell>
							<TableCell>Возвращён</TableCell>
							<TableCell>Статус</TableCell>
							<TableCell>Итоговая сумма</TableCell>
							<TableCell>Телефон клиента</TableCell>
							<TableCell>Выдан зарядным устройством</TableCell>
							<TableCell>Возвращён в зарядное устройство</TableCell>
							<TableCell>Имя партнёра</TableCell>
							<TableCell>Имя реферрера</TableCell>
							<TableCell>Серийный номер повербанка</TableCell>
							<TableCell>Название тарифа клиента</TableCell>
							<TableCell>Имя клиента</TableCell>
							<TableCell>UUID</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{saleAcb.map(item => (
							<Link
								key={item.uuid}
								href={ROUTES.saleAcbByUuid(item.uuid)}
								passHref
								legacyBehavior
							>
								<TableRow hover>
									<TableCell>
										{getDateView(item.startTime, 'DD.MM.YYYY H:mm')}
									</TableCell>
									<TableCell>
										{getDateView(item.stopTime, 'DD.MM.YYYY H:mm')}
									</TableCell>
									<TableCell>{getSaleAcbStatusView(item.status)}</TableCell>
									<TableCell>{getRublesView(item.totalSum)}</TableCell>
									<TableCell>{getPhoneView(item.clientPhone)}</TableCell>
									<TableCell>{item.startChargerName}</TableCell>
									<TableCell>{item.stopChargerName}</TableCell>
									<TableCell>{item.partnerName}</TableCell>
									<TableCell>{item.referrerName}</TableCell>
									<TableCell>{item.acbUuid}</TableCell>
									<TableCell>{item.clientTariffName}</TableCell>
									<TableCell>{item.clientName}</TableCell>
									<TableCell>{item.uuid}</TableCell>
								</TableRow>
							</Link>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
};
