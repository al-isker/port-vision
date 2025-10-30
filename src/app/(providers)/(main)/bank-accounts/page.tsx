import { Metadata } from 'next';

import { BankAccounts } from '@/screens/bank-accounts/BankAccounts';

export const metadata: Metadata = {
	title: 'Расчётные счета'
};

const BankAccountsPage = () => <BankAccounts />;

export default BankAccountsPage;
