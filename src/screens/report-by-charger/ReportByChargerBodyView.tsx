'use client';

import { Paper } from '@/ui/Paper';
import { Table } from '@/ui/Table';
import { TableBody } from '@/ui/TableBody';
import { TableCell } from '@/ui/TableCell';
import { TableContainer } from '@/ui/TableContainer';
import { TableHead } from '@/ui/TableHead';
import { TableRow } from '@/ui/TableRow';

import { IReportByCharger } from '@/entities/report-by-charger/report-by-charger.type';

import { getRublesView } from '@/shared/utils/views/rubles-view';

interface Props {
	reportByCharger: IReportByCharger;
}

export const ReportByChargerBodyView = ({ reportByCharger }: Props) => {
	return (
		<Paper className='overflow-hidden' disablePadding>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>№</TableCell>
							<TableCell>ID</TableCell>
							<TableCell>Название</TableCell>
							<TableCell>Кол-во аренд</TableCell>
							<TableCell>Сумма платежей</TableCell>
							<TableCell>Комиссия партнера</TableCell>
							<TableCell>Комиссия реферрера</TableCell>
							<TableCell>Прибыль</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{reportByCharger.items.map((item, index) => (
							<TableRow key={item.id}>
								<TableCell>{index + 1}</TableCell>
								<TableCell>{item.id}</TableCell>
								<TableCell>{item.name}</TableCell>
								<TableCell>{item.rentAmount}</TableCell>
								<TableCell>{getRublesView(item.paymentsSum)}</TableCell>
								<TableCell>{getRublesView(item.partnerCommission)}</TableCell>
								<TableCell>{getRublesView(item.referrerCommission)}</TableCell>
								<TableCell>{getRublesView(item.income)}</TableCell>
							</TableRow>
						))}
						<TableRow>
							<TableCell colSpan={3}>Итого:</TableCell>
							<TableCell>{reportByCharger.totalRentAmount}</TableCell>
							<TableCell>
								{getRublesView(reportByCharger.totalPayments)}
							</TableCell>
							<TableCell>
								{getRublesView(reportByCharger.totalPartnerCommission)}
							</TableCell>
							<TableCell>
								{getRublesView(reportByCharger.totalReferrerCommission)}
							</TableCell>
							<TableCell>
								{getRublesView(reportByCharger.totalIncome)}
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
};
