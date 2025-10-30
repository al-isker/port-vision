'use client';

import { MapView } from '@/ui/MapView';
import { MapViewRow } from '@/ui/MapViewItem';
import { Paper } from '@/ui/Paper';

import { IChargerType } from '@/entities/charger-type/charger-type.type';
import { IPartnerTariff } from '@/entities/partner-tariff/partner-tariff.type';

import { getPercentView } from '@/shared/utils/views/percentage-view';

import { PartnerTariffByIdViewHeader } from './PartnerTariffByIdViewHeader';

interface Props {
	partnerTariff: IPartnerTariff;
	chargerType?: IChargerType;
}

export const PartnerTariffByIdView = ({
	partnerTariff,
	chargerType
}: Props) => {
	return (
		<div className='h-full space-y-space'>
			<PartnerTariffByIdViewHeader
				partnerTariffId={partnerTariff.id}
				partnerTariffName={partnerTariff.name}
			/>

			<div className='grid grid-cols-2 gap-6'>
				<Paper>
					<MapView title='Основные данные'>
						<MapViewRow label='ID'>{partnerTariff.id}</MapViewRow>
						<MapViewRow label='Название'>{partnerTariff.name}</MapViewRow>
						<MapViewRow label='Процент от продаж'>
							{getPercentView(partnerTariff.percentage)}
						</MapViewRow>
						<MapViewRow label='Тип зарядного устройства'>
							{chargerType?.name}
						</MapViewRow>
					</MapView>
				</Paper>
			</div>
		</div>
	);
};
