'use client';

import { Fragment } from 'react';

import { Divider } from '@/ui/Divider';
import { MapView } from '@/ui/MapView';
import { MapViewRow } from '@/ui/MapViewItem';
import { Paper } from '@/ui/Paper';

import { IExchangeGroup } from '@/entities/exchange-group/exchange-group.type';

import { isFilledArray } from '@/shared/utils/checks/is-filled-array';

import { ExchangeGroupByIdViewHeader } from './ExchangeGroupByIdViewHeader';

interface Props {
	exchangeGroup: IExchangeGroup;
}

export const ExchangeGroupByIdView = ({ exchangeGroup }: Props) => {
	return (
		<div className='h-full space-y-space'>
			<ExchangeGroupByIdViewHeader
				exchangeGroupId={exchangeGroup.id}
				exchangeGroupName={exchangeGroup.name}
			/>

			<div className='grid grid-cols-2 gap-6'>
				<Paper>
					<MapView title='Основные данные'>
						<MapViewRow label='ID'>{exchangeGroup.id}</MapViewRow>
						<MapViewRow label='Название'>{exchangeGroup.name}</MapViewRow>
					</MapView>
				</Paper>

				{isFilledArray(exchangeGroup.chargers) && (
					<Paper>
						<MapView title='Зарядные устройства'>
							{exchangeGroup.chargers.map((item, index) => (
								<Fragment key={item.id}>
									<MapViewRow label='ID'>{item.id}</MapViewRow>
									<MapViewRow label='Название'>{item.name}</MapViewRow>

									{index !== exchangeGroup.chargers.length - 1 && <Divider />}
								</Fragment>
							))}
						</MapView>
					</Paper>
				)}
			</div>
		</div>
	);
};
