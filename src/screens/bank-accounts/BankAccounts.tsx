'use server';

import { SetPaginationParamsScript } from '@/shared/utils/url/SetPaginationParamsScript';

import { BankAccountsBody } from './BankAccountsBody';
import { BankAccountsHeader } from './BankAccountsHeader';

export const BankAccounts = () => (
	<div className='space-y-space h-full'>
		<BankAccountsHeader />
		<BankAccountsBody />
		<SetPaginationParamsScript />
	</div>
);
