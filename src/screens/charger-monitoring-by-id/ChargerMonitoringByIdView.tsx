'use client';

import { MapView } from '@/ui/MapView';
import { MapViewRow } from '@/ui/MapViewItem';
import { Paper } from '@/ui/Paper';
import { Table } from '@/ui/Table';
import { TableBody } from '@/ui/TableBody';
import { TableCell } from '@/ui/TableCell';
import { TableContainer } from '@/ui/TableContainer';
import { TableHead } from '@/ui/TableHead';
import { TableRow } from '@/ui/TableRow';

import { IAcbItem } from '@/entities/acb/acb.type';
import { IChargerMonitoringItem } from '@/entities/charger-monitoring/charger-monitoring.type';
import { IPartner } from '@/entities/partner/partner.type';
import { getPaymentMethodView } from '@/entities/partner/partner.view';

import { getCountItemsView } from '@/shared/utils/views/count-items-view';
import { getDateView } from '@/shared/utils/views/date-view';
import { getDegreeView } from '@/shared/utils/views/degree-view';
import { getPercentView } from '@/shared/utils/views/percentage-view';
import { getPhoneView } from '@/shared/utils/views/phone-view';
import { getYesNoView } from '@/shared/utils/views/yes-no-view';

import { LastMonitoringDurationChip } from '../charger-monitoring/LastMonitoringDurationChip';
import { ChargerMonitoringByIdViewButton } from './ChargerMonitoringByIdViewButton';
import { ChargerMonitoringByIdViewHeader } from './ChargerMonitoringByIdViewHeader';

interface Props {
	chargerMonitoringItem: IChargerMonitoringItem;
	acb: IAcbItem[];
	partner?: IPartner;
}

export const ChargerMonitoringByIdView = ({
	chargerMonitoringItem,
	acb,
	partner
}: Props) => {
	return (
		<div className='h-full space-y-space'>
			<ChargerMonitoringByIdViewHeader
				chargerMonitoringId={chargerMonitoringItem.id}
				chargerMonitoringName={chargerMonitoringItem.name}
			/>

			<div className='grid grid-cols-2 gap-6'>
				<Paper>
					<MapView title='Основные данные'>
						<MapViewRow label='ID'>{chargerMonitoringItem.id}</MapViewRow>
						<MapViewRow label='Название'>
							{chargerMonitoringItem.name}
						</MapViewRow>
						<MapViewRow label='Последняя связь'>
							{getDateView(
								chargerMonitoringItem.lastMonitoringAt,
								'DD.MM.YYYY H:mm'
							)}
						</MapViewRow>
						<MapViewRow label='Время связи'>
							<LastMonitoringDurationChip
								value={chargerMonitoringItem.lastMonitoringDuration}
							/>
						</MapViewRow>
						<MapViewRow label='Свободных слотов'>
							{getCountItemsView(chargerMonitoringItem.emptySlotsCount)}
						</MapViewRow>
						<MapViewRow label='Готовых к выдаче'>
							{getCountItemsView(chargerMonitoringItem.readyToUseCount)}
						</MapViewRow>
						<MapViewRow label='Заряжаются'>
							{getCountItemsView(chargerMonitoringItem.chargingCount)}
						</MapViewRow>
						<MapViewRow label='Кол-во аренд (за день)'>
							{chargerMonitoringItem.dailyRentCount}
						</MapViewRow>
						<MapViewRow label='Температура'>
							{getDegreeView(chargerMonitoringItem.temperature)}
						</MapViewRow>
						<MapViewRow label='Health'>
							{getPercentView(chargerMonitoringItem.health)}
						</MapViewRow>
						<MapViewRow label='Триггер'>
							{chargerMonitoringItem.trigger}
						</MapViewRow>
					</MapView>
				</Paper>

				{partner && (
					<Paper>
						<MapView title='Партнёр'>
							<MapViewRow label='ID'>{partner.id}</MapViewRow>
							<MapViewRow label='Имя'>{partner.name}</MapViewRow>
							<MapViewRow label='Email'>{partner.email}</MapViewRow>
							<MapViewRow label='Номер телефона'>
								{getPhoneView(partner.phone)}
							</MapViewRow>
							<MapViewRow label='Комментарий'>{partner.comment}</MapViewRow>
							<MapViewRow label='Метод оплаты'>
								{getPaymentMethodView(partner.paymentMethod)}
							</MapViewRow>
							<MapViewRow label='Активный'>
								{getYesNoView(partner?.active)}
							</MapViewRow>
						</MapView>
					</Paper>
				)}

				<Paper className='col-span-2'>
					<MapView title='Повербанки'>
						<TableContainer>
							<Table size='small' disablePadding>
								<TableHead>
									<TableRow>
										<TableCell>ID</TableCell>
										<TableCell>Серийный номер</TableCell>
										<TableCell>Номер слота</TableCell>
										<TableCell>Уровень заряда</TableCell>
										<TableCell>Температура</TableCell>
										<TableCell>Health</TableCell>
										<TableCell>Кол-во использований</TableCell>
										<TableCell align='center'>Действия</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{acb?.map(item => (
										<TableRow key={item.id}>
											<TableCell>{item.id}</TableCell>
											<TableCell>{item.acbUuid}</TableCell>
											<TableCell>{item.slot}</TableCell>
											<TableCell>{getPercentView(item.percentage)}</TableCell>
											<TableCell>{getDegreeView(item.temperature)}</TableCell>
											<TableCell>{getPercentView(item.health)}</TableCell>
											<TableCell>{item.usageCount}</TableCell>
											<TableCell>
												<ChargerMonitoringByIdViewButton
													className='w-full'
													monitoringChargerId={chargerMonitoringItem.id}
													acbUuid={item.acbUuid}
												/>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</MapView>
				</Paper>
			</div>
		</div>
	);
};
