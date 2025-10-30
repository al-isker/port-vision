'use server';

import { SetPaginationParamsScript } from '@/shared/utils/url/SetPaginationParamsScript';

import { PartnersBody } from './PartnersBody';
import { PartnersHeader } from './PartnersHeader';

export const Partners = () => (
	<div className='space-y-space h-full'>
		<PartnersHeader />
		<PartnersBody />
		<SetPaginationParamsScript />
	</div>
);
