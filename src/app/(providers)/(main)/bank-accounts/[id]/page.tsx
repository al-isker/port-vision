import { Metadata } from 'next';

import { BankAccountById } from '@/screens/bank-account-by-id/BankAccountById';

export const metadata: Metadata = {
	title: 'Расчётный счёт'
};

const BankAccountsByIdPage = () => <BankAccountById />;

export default BankAccountsByIdPage;
