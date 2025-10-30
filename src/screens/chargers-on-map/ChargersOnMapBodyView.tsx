'use client';

import { useMemo } from 'react';

import { Power } from '@mui/icons-material';
import { LngLat } from '@yandex/ymaps3-types';

import { YMapPointClusterer } from '@/widgets/y-map-point-clusterer/YMapPointClusterer';

import { Paper } from '@/ui/Paper';

import { ICharger } from '@/entities/charger/charger.type';

import { DEFAULT_LOCATION } from '@/shared/constants/map/default-location';
import { useYmapsStore } from '@/shared/store/ymaps/use-ymaps-store';
import { isEmpty } from '@/shared/utils/checks/is-empty';
import { getBoundsByCoordinates } from '@/shared/utils/ymaps/bounds-by-coordinates';

interface Props {
	chargers: ICharger[];
}

export const ChargersOnMapBodyView = ({ chargers }: Props) => {
	const Ymaps = useYmapsStore(state => state.Ymaps);

	const coordinates = Array<LngLat>();

	for (const charger of chargers) {
		if (!isEmpty(charger.longitude, charger.latitude)) {
			coordinates.push([charger.longitude!, charger.latitude!]);
		}
	}

	const location = useMemo(() => {
		const bounds = getBoundsByCoordinates(coordinates);

		return bounds ? { bounds } : DEFAULT_LOCATION;
	}, [coordinates]);

	if (Ymaps) {
		return (
			<Paper className='h-[65vh]'>
				<Ymaps.YMap className='w-full rounded-sm' location={location}>
					<Ymaps.YMapDefaultSchemeLayer />
					<Ymaps.YMapDefaultFeaturesLayer />

					<Ymaps.YMapControls position='bottom'>
						<Ymaps.YMapZoomControl />
					</Ymaps.YMapControls>

					<YMapPointClusterer
						coordinates={coordinates}
						markerIcon={<Power />}
					/>
				</Ymaps.YMap>
			</Paper>
		);
	}
};
