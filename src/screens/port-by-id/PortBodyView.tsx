'use client';

import { useState } from 'react';

import { Rating } from '@mui/material';

import { MapView } from '@/ui/MapView';
import { MapViewRow } from '@/ui/MapViewItem';
import { Paper } from '@/ui/Paper';
import { ToggleButton } from '@/ui/ToggleButton';
import { ToggleButtonGroup } from '@/ui/ToggleButtonGroup';
import { Typography } from '@/ui/Typography';

import { IPort } from '@/entities/port/port.type';

import { PortBodyMap } from './PortBodyMap';
import { PortSubscribe } from './PortSubscribe';

interface Props {
	port: IPort;
}

export const PortBodyView = ({ port }: Props) => {
	const [tab, setTab] = useState('water');

	const handleChange = (_: any, value: string) => {
		if (value) {
			setTab(value);
		}
	};

	return (
		<>
			<Paper className='!m-space-sm'>
				<PortBodyMap port={port} tab={tab} />

				<ToggleButtonGroup
					fullWidth
					className='mt-2'
					color='primary'
					exclusive
					value={tab}
					onChange={handleChange}
				>
					<ToggleButton className='!text-xs' value='water'>
						Загрязнённость воды
					</ToggleButton>
					<ToggleButton className='!text-xs' value='air'>
						Загрязнённость воздуха
					</ToggleButton>
				</ToggleButtonGroup>
			</Paper>

			<Paper className='!m-space-sm'>
				<Typography variant='h2' className='!text-xl'>
					{port.port.name}
				</Typography>

				{port.port.description.includes('там тут') && (
					<span className='mt-0.5 block text-xs text-black/60'>
						{port.port.description}
					</span>
				)}

				<img className='mt-2 size-full rounded-sm' src={port.port.imageUrl} />

				<PortSubscribe id={port.port.id} />
			</Paper>

			<Paper className='!m-space-sm'>
				<MapView>
					<MapViewRow label='Судопроходимость'>
						{port.port.shipsInServe}
					</MapViewRow>

					<MapViewRow label='Кол-во инцидентов'>
						{port.port.incidentCount}
					</MapViewRow>

					<MapViewRow label='Рейтинг'>
						<Rating value={port.port.rating / 2} precision={0.5} />
					</MapViewRow>
				</MapView>
			</Paper>

			<Paper className='!m-space-sm'>
				<Typography variant='h3' className='!text-[1rem]'>
					Комментарии
				</Typography>

				<div>
					{port.comments?.map(item => (
						<div />
					))}
				</div>
			</Paper>
		</>
	);
};
