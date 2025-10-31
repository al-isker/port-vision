'use client';

import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

import { Sailing } from '@mui/icons-material';

import { YMapPointClusterer } from '@/widgets/y-map-point-clusterer/YMapPointClusterer';

import { MapMarker } from '@/ui/MapMarker';

import { IPort } from '@/entities/port/port.type';

import { ROUTES } from '@/shared/config/routes/routes';
import { DEFAULT_LOCATION } from '@/shared/constants/map/default-location';
import { useYmapsStore } from '@/shared/store/ymaps/use-ymaps-store';
import { getBoundsByCoordinates } from '@/shared/utils/ymaps/bounds-by-coordinates';

interface Props {
	ports: IPort[];
}

export const PortBodyMap = ({ ports }: Props) => {
	const router = useRouter();

	const Ymaps = useYmapsStore(state => state.Ymaps);

	const location = useMemo(() => {
		const bounds = getBoundsByCoordinates(
			ports.map(({ port }) => [port.longitude, port.latitude])
		);

		return bounds ? { bounds } : DEFAULT_LOCATION;
	}, [ports]);

	if (Ymaps) {
		return (
			<Ymaps.YMap className='h-full w-full' location={location}>
				<Ymaps.YMapDefaultSchemeLayer />
				<Ymaps.YMapDefaultFeaturesLayer />

				<Ymaps.YMapControls position='left'>
					<Ymaps.YMapZoomControl />
				</Ymaps.YMapControls>

				<YMapPointClusterer
					data={ports.map(item => item.port)}
					markerSlot={(item: IPort['port']) => (
						<MapMarker
							className='cursor-pointer'
							onClick={() => router.push(ROUTES.portById(item.id))}
						>
							<Sailing className='size-[60%]' />
						</MapMarker>
					)}
				/>
			</Ymaps.YMap>
		);
	}
};
