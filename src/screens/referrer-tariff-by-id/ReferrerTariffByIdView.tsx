'use client';

import { MapView } from '@/ui/MapView';
import { MapViewRow } from '@/ui/MapViewItem';
import { Paper } from '@/ui/Paper';

import { IReferrerTariff } from '@/entities/referrer-tariff/referrer-tariff.type';

import { getPercentView } from '@/shared/utils/views/percentage-view';
import { getYesNoView } from '@/shared/utils/views/yes-no-view';

import { ReferrerTariffByIdViewHeader } from './ReferrerTariffByIdViewHeader';

interface Props {
	referrerTariff: IReferrerTariff;
}

export const ReferrerTariffByIdView = ({ referrerTariff }: Props) => {
	return (
		<div className='h-full space-y-space'>
			<ReferrerTariffByIdViewHeader
				referrerTariffId={referrerTariff.id}
				referrerTariffName={referrerTariff.name}
			/>

			<div className='grid grid-cols-2 gap-6'>
				<Paper>
					<MapView title='Основные данные'>
						<MapViewRow label='ID'>{referrerTariff.id}</MapViewRow>
						<MapViewRow label='Имя'>{referrerTariff.name}</MapViewRow>
						<MapViewRow label='Процент от продаж'>
							{getPercentView(referrerTariff.percentage)}
						</MapViewRow>
						<MapViewRow label='Активный'>
							{getYesNoView(referrerTariff.active)}
						</MapViewRow>
					</MapView>
				</Paper>
			</div>
		</div>
	);
};
