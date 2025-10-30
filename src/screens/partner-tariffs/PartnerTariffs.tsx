'use server';

import { SetPaginationParamsScript } from '@/shared/utils/url/SetPaginationParamsScript';

import { PartnerTariffsBody } from './PartnerTariffsBody';
import { PartnerTariffsHeader } from './PartnerTariffsHeader';

export const PartnerTariffs = () => (
	<div className='space-y-space h-full'>
		<PartnerTariffsHeader />
		<PartnerTariffsBody />
		<SetPaginationParamsScript />
	</div>
);
