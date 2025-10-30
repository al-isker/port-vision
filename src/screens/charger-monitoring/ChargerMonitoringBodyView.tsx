'use client';

import Link from 'next/link';

import { Paper } from '@/ui/Paper';
import { Table } from '@/ui/Table';
import { TableBody } from '@/ui/TableBody';
import { TableCell } from '@/ui/TableCell';
import { TableContainer } from '@/ui/TableContainer';
import { TableHead } from '@/ui/TableHead';
import { TableRow } from '@/ui/TableRow';

import { IChargerMonitoringItem } from '@/entities/charger-monitoring/charger-monitoring.type';

import { ROUTES } from '@/shared/config/routes/routes';
import { getCountItemsView } from '@/shared/utils/views/count-items-view';
import { getDegreeView } from '@/shared/utils/views/degree-view';
import { getPercentView } from '@/shared/utils/views/percentage-view';

import { LastMonitoringDurationChip } from './LastMonitoringDurationChip';

interface Props {
	chargeMonitoring: IChargerMonitoringItem[];
}

export const ChargerMonitoringBodyView = ({ chargeMonitoring }: Props) => {
	return (
		<Paper className='overflow-hidden' disablePadding>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Название</TableCell>
							<TableCell>Время связи</TableCell>
							<TableCell>Партнёр</TableCell>
							<TableCell>Свободных слотов</TableCell>
							<TableCell>Готовых к выдаче</TableCell>
							<TableCell>Заряжаются</TableCell>
							<TableCell>Кол-во аренд (за день)</TableCell>
							<TableCell>Температура</TableCell>
							<TableCell>Health</TableCell>
							<TableCell>Триггер</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{chargeMonitoring.map(item => (
							<Link
								key={item.id}
								href={ROUTES.chargerMonitoringById(item.id)}
								passHref
								legacyBehavior
							>
								<TableRow hover>
									<TableCell>{item.id}</TableCell>
									<TableCell>{item.name}</TableCell>
									<TableCell>
										<LastMonitoringDurationChip
											className='w-full'
											value={item.lastMonitoringDuration}
										/>
									</TableCell>
									<TableCell>{item.partnerName}</TableCell>
									<TableCell>
										{getCountItemsView(item.emptySlotsCount)}
									</TableCell>
									<TableCell>
										{getCountItemsView(item.readyToUseCount)}
									</TableCell>
									<TableCell>{getCountItemsView(item.chargingCount)}</TableCell>
									<TableCell>{item.dailyRentCount}</TableCell>
									<TableCell>{getDegreeView(item.temperature)}</TableCell>
									<TableCell>{getPercentView(item.health)}</TableCell>
									<TableCell>{item.trigger}</TableCell>
								</TableRow>
							</Link>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
};
