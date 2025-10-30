'use client';

import { MapView } from '@/ui/MapView';
import { MapViewRow } from '@/ui/MapViewItem';
import { Paper } from '@/ui/Paper';

import { IChargerType } from '@/entities/charger-type/charger-type.type';

import { ChargerTypeByIdViewHeader } from './ChargerTypeByIdViewHeader';

interface Props {
	chargerType: IChargerType;
}

export const ChargerTypeByIdView = ({ chargerType }: Props) => {
	return (
		<div className='h-full space-y-space'>
			<ChargerTypeByIdViewHeader
				chargerTypeId={chargerType.id}
				chargerTypeName={chargerType.name}
			/>

			<div className='grid grid-cols-2 gap-6'>
				<Paper>
					<MapView title='Основные данные'>
						<MapViewRow label='ID'>{chargerType.id}</MapViewRow>
						<MapViewRow label='Название'>{chargerType.name}</MapViewRow>
						<MapViewRow label='Кол-во слотов'>
							{chargerType.slotCount}
						</MapViewRow>
						<MapViewRow label='Опции'>{chargerType.options}</MapViewRow>
					</MapView>
				</Paper>
			</div>
		</div>
	);
};
