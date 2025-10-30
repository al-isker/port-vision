'use client';

import { MapView } from '@/ui/MapView';
import { MapViewRow } from '@/ui/MapViewItem';
import { Paper } from '@/ui/Paper';

import { IClientTariff } from '@/entities/client-tariff/client-tariff.type';

import { getRublesView } from '@/shared/utils/views/rubles-view';

import { ClientTariffByIdViewHeader } from './ClientTariffByIdViewHeader';

interface Props {
	clientTariff: IClientTariff;
}

export const ClientTariffByIdView = ({ clientTariff }: Props) => {
	return (
		<div className='h-full space-y-space'>
			<ClientTariffByIdViewHeader
				clientTariffId={clientTariff.id}
				clientTariffName={clientTariff.name}
			/>

			<div className='grid grid-cols-2 gap-6'>
				<Paper>
					<MapView title='Основные данные'>
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
			</div>
		</div>
	);
};
