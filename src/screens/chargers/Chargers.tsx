'use server';

import { SetPaginationParamsScript } from '@/shared/utils/url/SetPaginationParamsScript';

import { ChargersBody } from './ChargersBody';
import { ChargersHeader } from './ChargersHeader';

export const Chargers = () => (
	<div className='space-y-space h-full'>
		<ChargersHeader />
		<ChargersBody />
		<SetPaginationParamsScript />
	</div>
);
