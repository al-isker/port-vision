'use server';

import { SetPaginationParamsScript } from '@/shared/utils/url/SetPaginationParamsScript';

import { ClientTariffsBody } from './ClientTariffsBody';
import { ClientTariffsHeader } from './ClientTariffsHeader';

export const ClientTariffs = () => (
	<div className='space-y-space h-full'>
		<ClientTariffsHeader />
		<ClientTariffsBody />
		<SetPaginationParamsScript />
	</div>
);
