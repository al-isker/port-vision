'use client';

import { useState } from 'react';

import { AccountCircle } from '@mui/icons-material';
import { Divider, Rating } from '@mui/material';
import dayjs from 'dayjs';

import { MapView } from '@/ui/MapView';
import { MapViewRow } from '@/ui/MapViewItem';
import { Paper } from '@/ui/Paper';
import { ToggleButton } from '@/ui/ToggleButton';
import { ToggleButtonGroup } from '@/ui/ToggleButtonGroup';
import { Typography } from '@/ui/Typography';

import { IPort } from '@/entities/port/port.type';

import { PortBodyMap } from './PortBodyMap';
import { PortCreateComment } from './PortCreateComment';
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

				{!port.port.description.includes('там тут') && (
					<span className='mt-0.5 block text-xs text-black/60'>
						{port.port.description}
					</span>
				)}

				<img className='mt-2.5 size-full rounded-sm' src={port.port.imageUrl} />

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

					<MapViewRow label='Загрязнённость воды'>
						{port.port.waterPollution[0] * 5} TDS
					</MapViewRow>

					<MapViewRow label='Загрязнённость воды'>
						{port.port.airPollution[0] * 5} AQI
					</MapViewRow>

					<MapViewRow label='Загрязнённость воздуха'>
						{port.port.incidentCount}
					</MapViewRow>

					<MapViewRow label='Рейтинг'>
						<Rating value={port.port.rating / 2} precision={0.5} />
					</MapViewRow>
				</MapView>
			</Paper>

			<Paper className='!m-space-sm'>
				<Typography variant='h3' className='!text-[1rem]' gutterBottom>
					Комментарии
				</Typography>

				<div className='flex flex-col gap-y-1'>
					{port.comments?.map((item, index) => (
						<>
							<div className='flex items-center gap-x-4 p-1'>
								<AccountCircle fontSize='large' />
								<div className='flex flex-col'>
									<div className='flex h-full items-center space-x-3'>
										<span className='text-gray-900 font-medium'>
											{item.author}
										</span>

										<span className='text-gray-500 text-sm'>
											{dayjs(item.OffsetDateTime).format('h:mm DD MMMM')}
										</span>
									</div>

									<p className='text-gray-700 leading-relaxed'>{item.text}</p>
								</div>
							</div>

							{index !== port.comments!.length - 1 && <Divider />}
						</>
					))}
				</div>

				<PortCreateComment id={port.port.id} />
			</Paper>

			<div className='h-40' />
		</>
	);
};
