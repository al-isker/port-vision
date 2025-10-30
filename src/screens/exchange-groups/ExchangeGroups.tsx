'use server';

import { SetPaginationParamsScript } from '@/shared/utils/url/SetPaginationParamsScript';

import { ExchangeGroupsBody } from './ExchangeGroupsBody';
import { ExchangeGroupsHeader } from './ExchangeGroupsHeader';

export const ExchangeGroups = () => (
	<div className='space-y-space h-full'>
		<ExchangeGroupsHeader />
		<ExchangeGroupsBody />
		<SetPaginationParamsScript />
	</div>
);
