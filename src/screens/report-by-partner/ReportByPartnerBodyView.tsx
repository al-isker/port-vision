'use client';

import { Paper } from '@/ui/Paper';
import { Table } from '@/ui/Table';
import { TableBody } from '@/ui/TableBody';
import { TableCell } from '@/ui/TableCell';
import { TableContainer } from '@/ui/TableContainer';
import { TableHead } from '@/ui/TableHead';
import { TableRow } from '@/ui/TableRow';

import { IReportByPartner } from '@/entities/report-by-partner/report-by-partner.type';

import { getDateView } from '@/shared/utils/views/date-view';
import { getRublesView } from '@/shared/utils/views/rubles-view';

interface Props {
	reportByPartner: IReportByPartner;
}

export const ReportByPartnerBodyView = ({ reportByPartner }: Props) => {
	return (
		<Paper className='overflow-hidden' disablePadding>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>№</TableCell>
							<TableCell>Дата</TableCell>
							<TableCell>Начальный баланс</TableCell>
							<TableCell>Сумма комиссий</TableCell>
							<TableCell>Сумма выплат</TableCell>
							<TableCell>Конечный баланс</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{reportByPartner.items.map((item, index) => (
							<TableRow key={index}>
								<TableCell>{index + 1}</TableCell>
								<TableCell>{getDateView(item.date, 'DD.MM.YYYY')}</TableCell>
								<TableCell>{getRublesView(item.initialBalance)}</TableCell>
								<TableCell>{getRublesView(item.commissionSum)}</TableCell>
								<TableCell>{getRublesView(item.payoutSum)}</TableCell>
								<TableCell>{getRublesView(item.finalBalance)}</TableCell>
							</TableRow>
						))}
						<TableRow>
							<TableCell colSpan={2}>Итого:</TableCell>
							<TableCell></TableCell>
							<TableCell>
								{getRublesView(reportByPartner.totalCommission)}
							</TableCell>
							<TableCell>
								{getRublesView(reportByPartner.totalPayout)}
							</TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
};
