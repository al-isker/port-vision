'use server';

import { SetPaginationParamsScript } from '@/shared/utils/url/SetPaginationParamsScript';

import { ReferrersBody } from './ReferrersBody';
import { ReferrersHeader } from './ReferrersHeader';

export const Referrers = () => {
	return (
		<div className='space-y-space h-full'>
			<ReferrersHeader />
			<ReferrersBody />
			<SetPaginationParamsScript />
		</div>
	);
};
