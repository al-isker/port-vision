'use client';

import { Paper } from '@/ui/Paper';
import { Table } from '@/ui/Table';
import { TableBody } from '@/ui/TableBody';
import { TableCell } from '@/ui/TableCell';
import { TableContainer } from '@/ui/TableContainer';
import { TableHead } from '@/ui/TableHead';
import { TableRow } from '@/ui/TableRow';

import { IReportWherePowerbank } from '@/entities/report-where-powerbank/report-where-powerbank.type';
import { getReportWherePowerbankLocatorView } from '@/entities/report-where-powerbank/report-where-powerbank.view';

import { getDurationView } from '@/shared/utils/views/duration-view';

interface Props {
	reportWherePowerbank: IReportWherePowerbank;
}

export const ReportWherePowerbankBodyView = ({
	reportWherePowerbank
}: Props) => {
	return (
		<Paper className='overflow-hidden' disablePadding>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>№</TableCell>
							<TableCell>Серийный номер</TableCell>
							<TableCell>Местоположение</TableCell>
							<TableCell>Кто</TableCell>
							<TableCell>Время</TableCell>
							<TableCell>Кол-во использований</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{reportWherePowerbank.items.map((item, index) => (
							<TableRow key={index}>
								<TableCell>{index + 1}</TableCell>
								<TableCell>{item.acbUuid}</TableCell>
								<TableCell>
									{getReportWherePowerbankLocatorView(item.locator)}
								</TableCell>
								<TableCell>{item.locatorName}</TableCell>
								<TableCell>
									{getDurationView(item.timeDuration, 'Hч, mм')}
								</TableCell>
								<TableCell>{item.usageCount}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
};
