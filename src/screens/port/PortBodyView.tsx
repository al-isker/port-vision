'use client';

import Link from 'next/link';

import { KeyboardDoubleArrowDown } from '@mui/icons-material';
import { Rating } from '@mui/material';
import { BarChart } from '@mui/x-charts';

import { Button } from '@/ui/Button';
import { Paper } from '@/ui/Paper';
import { Typography } from '@/ui/Typography';

import { IPort } from '@/entities/port/port.type';

import { ROUTES } from '@/shared/config/routes/routes';

import { PortBodyMap } from './PortBodyMap';

interface Props {
	ports: IPort[];
}

export const PortBodyView = ({ ports }: Props) => {
	const handleClick = () => {
		const scrollable = document.querySelector('.scrollable');

		scrollable?.scrollBy({
			behavior: 'smooth',
			top: screen.height / 1.4
		});
	};

	return (
		<>
			<Paper
				className='relative size-full rounded-b-none pb-1.5'
				disablePadding
			>
				<Button
					className='absolute bottom-space left-space-sm right-space-sm z-10'
					variant='contained'
					endIcon={<KeyboardDoubleArrowDown />}
					onClick={handleClick}
				>
					Прокрутить
				</Button>

				<PortBodyMap ports={ports} />
			</Paper>

			<Paper className='!m-space-sm'>
				<Typography className='!text-lg' variant='h2' gutterBottom>
					Зелёный рейтинг
				</Typography>

				<div className='w-full overflow-y-auto'>
					<BarChart
						height={300}
						xAxis={[{ data: [''] }]}
						series={ports.map(({ port }) => ({
							data: [port.rating],
							label: port.name.replace('Порт ', ''),
							type: 'bar'
						}))}
					/>
				</div>
			</Paper>

			<Paper className='!m-space-sm'>
				<Typography className='!text-lg' variant='h2'>
					Все порты
				</Typography>

				<span className='mb-space block text-xs text-black/60'>
					кликните на порт для подробного просмотра
				</span>

				<div>
					{ports.map(({ port, comments }) => (
						<Link
							className='mb-4 flex h-20 gap-2 rounded bg-primary-light/5 transition-colors duration-200 active:bg-primary/20'
							href={ROUTES.portById(port.id)}
						>
							<div className='h-full w-36 max-w-[50%]'>
								<img
									className='size-full rounded object-cover'
									src={port.imageUrl}
								/>
							</div>

							<div className='flex flex-col justify-between p-0.5'>
								<Typography>{port.name}</Typography>

								<span className='-mt-0.5 mb-auto text-[0.7rem] text-black/50'>
									Комментариев: {(comments ?? []).length}
								</span>

								<Rating value={port.rating / 2} precision={0.5} />
							</div>
						</Link>
					))}
				</div>
			</Paper>
		</>
	);
};
