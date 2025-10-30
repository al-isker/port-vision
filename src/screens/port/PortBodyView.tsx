'use client';

import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

import { Sailing } from '@mui/icons-material';
import { LngLat } from '@yandex/ymaps3-types';

import { YMapPointClusterer } from '@/widgets/y-map-point-clusterer/YMapPointClusterer';

import { MapMarker } from '@/ui/MapMarker';

import { IPort } from '@/entities/port/port.type';

import { ROUTES } from '@/shared/config/routes/routes';
import { DEFAULT_LOCATION } from '@/shared/constants/map/default-location';
import { useYmapsStore } from '@/shared/store/ymaps/use-ymaps-store';
import { isEmpty } from '@/shared/utils/checks/is-empty';
import { getBoundsByCoordinates } from '@/shared/utils/ymaps/bounds-by-coordinates';

interface Props {
	ports: IPort[];
}

export const PortBodyView = ({ ports }: Props) => {
	const router = useRouter();

	const Ymaps = useYmapsStore(state => state.Ymaps);

	const coordinates = Array<LngLat>();

	for (const port of ports) {
		if (!isEmpty(port.port.longitude, port.port.latitude)) {
			coordinates.push([port.port.longitude!, port.port.latitude!]);
		}
	}

	const location = useMemo(() => {
		const bounds = getBoundsByCoordinates(coordinates);

		return bounds ? { bounds } : DEFAULT_LOCATION;
	}, [coordinates]);

	if (Ymaps) {
		return (
			<div className='h-[calc(100vh-400px)] md:h-[calc(100vh-300px)]'>
				<Ymaps.YMap className='w-full rounded-b-sm' location={location}>
					<Ymaps.YMapDefaultSchemeLayer />
					<Ymaps.YMapDefaultFeaturesLayer />

					<Ymaps.YMapControls position='bottom'>
						<Ymaps.YMapZoomControl />
					</Ymaps.YMapControls>

					<YMapPointClusterer
						data={ports.map(item => item.port)}
						markerSlot={(item: IPort['port']) => {
							return (
								<div className='relative'>
									<MapMarker
										className='cursor-pointer'
										onClick={() => router.push(ROUTES.portById(item.id))}
									>
										<Sailing className='size-[60%]' />
									</MapMarker>

									<div
										className='absolute left-0 top-0 -z-10 -translate-x-1/2 -translate-y-1/2 bg-primary'
										style={{ width: 100, height: 100 }}
									/>
								</div>
							);
						}}
					/>
				</Ymaps.YMap>
			</div>
		);
	}
};
