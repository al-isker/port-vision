'use client';

import { Divider } from '@/ui/Divider';
import { MapView } from '@/ui/MapView';
import { MapViewRow } from '@/ui/MapViewItem';
import { Paper } from '@/ui/Paper';
import { Table } from '@/ui/Table';
import { TableBody } from '@/ui/TableBody';
import { TableCell } from '@/ui/TableCell';
import { TableContainer } from '@/ui/TableContainer';
import { TableHead } from '@/ui/TableHead';
import { TableRow } from '@/ui/TableRow';

import { ICharger } from '@/entities/charger/charger.type';
import { IClientTariff } from '@/entities/client-tariff/client-tariff.type';
import { IClient } from '@/entities/client/client.type';
import { IPartner } from '@/entities/partner/partner.type';
import { IReferrer } from '@/entities/referrer/referrer.type';
import { ISaleAcbByUuid } from '@/entities/sale-acb/sale-acb.type';
import {
	getPaymentStatusView,
	getSaleAcbStatusView
} from '@/entities/sale-acb/sale-acb.view';

import { getDateView } from '@/shared/utils/views/date-view';
import { getPercentView } from '@/shared/utils/views/percentage-view';
import { getPhoneView } from '@/shared/utils/views/phone-view';
import { getRublesView } from '@/shared/utils/views/rubles-view';

import { SaleAcbByUuidViewHeader } from './SaleAcbByUuidViewHeader';

interface Props {
	saleAcb: ISaleAcbByUuid;
	client?: IClient;
	partner?: IPartner;
	referrer?: IReferrer;
	startCharger?: ICharger;
	stopCharger?: ICharger;
	clientTariff?: IClientTariff;
}

export const SaleAcbByUuidView = ({
	saleAcb,
	client,
	partner,
	referrer,
	startCharger,
	stopCharger,
	clientTariff
}: Props) => {
	return (
		<div className='h-full space-y-space'>
			<SaleAcbByUuidViewHeader saleAcbAcbUuid={saleAcb.acbUuid} />

			<div className='grid grid-cols-2 gap-6'>
				<Paper>
					<MapView title='Основные данные'>
						<MapViewRow label='UUID'>{saleAcb.uuid}</MapViewRow>
						<MapViewRow label='Серийный номер повербанка'>
							{saleAcb.acbUuid}
						</MapViewRow>
						<MapViewRow label='Статус'>
							{getSaleAcbStatusView(saleAcb.status)}
						</MapViewRow>
						<MapViewRow label='Выдан'>
							{getDateView(saleAcb.startTime, 'DD.MM.YYYY H:mm')}
						</MapViewRow>
						<MapViewRow label='Возвращён'>
							{getDateView(saleAcb.stopTime, 'DD.MM.YYYY H:mm')}
						</MapViewRow>
						<MapViewRow label='Заряд при выдаче'>
							{getPercentView(saleAcb.startAcbPercentage)}
						</MapViewRow>
						<MapViewRow label='Заряд при возвращении'>
							{getPercentView(saleAcb.stopAcbPercentage)}
						</MapViewRow>
						<MapViewRow label='Итоговая сумма'>
							{getRublesView(saleAcb.totalSum)}
						</MapViewRow>

						<Divider />

						<MapViewRow label='Имя клиента'>{client?.name}</MapViewRow>
						<MapViewRow label='Телефон клиента'>
							{getPhoneView(client?.phone)}
						</MapViewRow>
						<MapViewRow label='Имя партнёра'>{partner?.name}</MapViewRow>
						<MapViewRow label='Имя реферрера'>{referrer?.name}</MapViewRow>
						<MapViewRow label='Выдан зарядным устройством'>
							{startCharger?.name}
						</MapViewRow>
						<MapViewRow label='Возвращён в зарядное устройство'>
							{startCharger?.name}
						</MapViewRow>
					</MapView>
				</Paper>

				{clientTariff && (
					<Paper>
						<MapView title='Тариф клиента'>
							<MapViewRow label='ID'>{clientTariff.id}</MapViewRow>
							<MapViewRow label='Название'>{clientTariff.name}</MapViewRow>
							<MapViewRow label='Цена за первый час'>
								{getRublesView(clientTariff.priceFirstHour)}
							</MapViewRow>
							<MapViewRow label='Цена после первого часа'>
								{getRublesView(clientTariff.priceNext)}
							</MapViewRow>
							<MapViewRow label='Штраф'>
								{getRublesView(clientTariff.penalty)}
							</MapViewRow>
						</MapView>
					</Paper>
				)}

				<Paper className='col-span-2'>
					<MapView title='Платежи'>
						<TableContainer>
							<Table size='small' disablePadding>
								<TableHead>
									<TableRow>
										<TableCell>ID</TableCell>
										<TableCell>Статус</TableCell>
										<TableCell>Завершено</TableCell>
										<TableCell>Сумма</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{saleAcb.payments.map(item => (
										<TableRow key={item.id}>
											<TableCell>{item.id}</TableCell>
											<TableCell>{getPaymentStatusView(item.status)}</TableCell>
											<TableCell>
												{getDateView(item.completedAt, 'DD.MM.YYYY H:mm')}
											</TableCell>
											<TableCell>{getRublesView(item.sum)}</TableCell>
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
