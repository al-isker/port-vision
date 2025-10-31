'use client';

import { Sailing } from '@mui/icons-material';

import { YMapPointClusterer } from '@/widgets/y-map-point-clusterer/YMapPointClusterer';

import { MapMarker } from '@/ui/MapMarker';

import { IPort } from '@/entities/port/port.type';

import { useYmapsStore } from '@/shared/store/ymaps/use-ymaps-store';

interface Props {
	port: IPort;
	tab: string;
}

export const PortBodyMap = ({ port, tab }: Props) => {
	const Ymaps = useYmapsStore(state => state.Ymaps);

	if (Ymaps) {
		return (
			<Ymaps.YMap
				className='h-[50vh] w-full rounded-sm'
				behaviors={['drag']}
				location={{
					center: [port.port.longitude, port.port.latitude],
					zoom: 15
				}}
			>
				<Ymaps.YMapDefaultSchemeLayer />
				<Ymaps.YMapDefaultFeaturesLayer />

				<YMapPointClusterer
					data={[port.port]}
					markerSlot={(item: IPort['port']) => (
						<div className='relative'>
							<MapMarker className='cursor-pointer'>
								<Sailing className='size-[60%]' />
							</MapMarker>

							{tab === 'water' && (
								<>
									<div
										className='bg-red-900/70 absolute left-0 top-0 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full'
										style={{
											width: item.waterPollution[0] * 8,
											height: item.waterPollution[0] * 8
										}}
									/>

									<div
										className='bg-red-700/50 absolute left-0 top-0 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full'
										style={{
											width: item.waterPollution[1] * 8,
											height: item.waterPollution[1] * 8
										}}
									/>

									<div
										className='bg-orange-600/40 absolute left-0 top-0 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full'
										style={{
											width: item.waterPollution[2] * 8,
											height: item.waterPollution[2] * 8
										}}
									/>
								</>
							)}

							{tab === 'air' && (
								<>
									<div
										className='bg-gray-700/70 absolute left-0 top-0 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full'
										style={{
											width: item.airPollution[0] * 9,
											height: item.airPollution[0] * 9
										}}
									/>

									<div
										className='bg-gray-600/50 absolute left-0 top-0 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full'
										style={{
											width: item.airPollution[1] * 9,
											height: item.airPollution[1] * 9
										}}
									/>

									<div
										className='bg-gray-500/40 absolute left-0 top-0 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full'
										style={{
											width: item.airPollution[2] * 9,
											height: item.airPollution[2] * 9
										}}
									/>
								</>
							)}
						</div>
					)}
				/>
			</Ymaps.YMap>
		);
	}
};
