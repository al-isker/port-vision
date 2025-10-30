'use server';

import { SetPaginationParamsScript } from '@/shared/utils/url/SetPaginationParamsScript';

import { ChargerTypesBody } from './ChargerTypesBody';
import { ChargerTypesHeader } from './ChargerTypesHeader';

export const ChargerTypes = () => (
	<div className='space-y-space h-full'>
		<ChargerTypesHeader />
		<ChargerTypesBody />
		<SetPaginationParamsScript />
	</div>
);
