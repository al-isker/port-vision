'use server';

import { SetPaginationParamsScript } from '@/shared/utils/url/SetPaginationParamsScript';

import { ReferrerTariffsBody } from './ReferrerTariffsBody';
import { ReferrerTariffsHeader } from './ReferrerTariffsHeader';

export const ReferrerTariffs = () => (
	<div className='space-y-space h-full'>
		<ReferrerTariffsHeader />
		<ReferrerTariffsBody />
		<SetPaginationParamsScript />
	</div>
);
