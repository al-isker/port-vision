'use server';

import { SetPaginationParamsScript } from '@/shared/utils/url/SetPaginationParamsScript';

import { ChargerPlacesBody } from './ChargerPlacesBody';
import { ChargerPlacesHeader } from './ChargerPlacesHeader';

export const ChargerPlaces = () => (
	<div className='space-y-space h-full'>
		<ChargerPlacesHeader />
		<ChargerPlacesBody />
		<SetPaginationParamsScript />
	</div>
);
