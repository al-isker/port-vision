'use server';

import { SetPaginationParamsScript } from '@/shared/utils/url/SetPaginationParamsScript';

import { ClientsBody } from './ClientsBody';
import { ClientsHeader } from './ClientsHeader';

export const Clients = () => (
	<div className='space-y-space h-full'>
		<ClientsHeader />
		<ClientsBody />
		<SetPaginationParamsScript />
	</div>
);
