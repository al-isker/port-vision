'use server';

import { SetPaginationParamsScript } from '@/shared/utils/url/SetPaginationParamsScript';

import { SaleAcbBody } from './SaleAcbBody';
import { SaleAcbHeader } from './SaleAcbHeader';

export const SaleAcb = () => (
	<div className='h-full space-y-space'>
		<SaleAcbHeader />
		<SaleAcbBody />
		<SetPaginationParamsScript />
	</div>
);
