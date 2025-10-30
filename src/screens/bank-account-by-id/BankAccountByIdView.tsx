'use client';

import { MapView } from '@/ui/MapView';
import { MapViewRow } from '@/ui/MapViewItem';
import { Paper } from '@/ui/Paper';

import { IBankAccount } from '@/entities/bank-account/bank-account.type';
import { getBankAccountOwnerTypeView } from '@/entities/bank-account/bank-account.view';

import { getYesNoView } from '@/shared/utils/views/yes-no-view';

import { BankAccountByIdViewHeader } from './BankAccountByIdViewHeader';

interface Props {
	bankAccount: IBankAccount;
}

export const BankAccountByIdView = ({ bankAccount }: Props) => {
	return (
		<div className='h-full space-y-space'>
			<BankAccountByIdViewHeader bankAccountName={bankAccount.name} />

			<div className='grid grid-cols-2 gap-6'>
				<Paper>
					<MapView title='Основные данные'>
						<MapViewRow label='ID'>{bankAccount.id}</MapViewRow>
						<MapViewRow label='Название'>{bankAccount.name}</MapViewRow>
						<MapViewRow label='ИНН'>{bankAccount.inn}</MapViewRow>
						<MapViewRow label='КПП'>{bankAccount.kpp}</MapViewRow>
						<MapViewRow label='БИК'>{bankAccount.bik}</MapViewRow>
						<MapViewRow label='Название банка'>
							{bankAccount.bankName}
						</MapViewRow>
						<MapViewRow label='Расчетный счет'>
							{bankAccount.paymentAccount}
						</MapViewRow>
						<MapViewRow label='Юридический адрес'>
							{bankAccount.legalAddress}
						</MapViewRow>
						<MapViewRow label='Владелец'>
							{getBankAccountOwnerTypeView(bankAccount.ownerType)}
						</MapViewRow>
						<MapViewRow label='Активный'>
							{getYesNoView(bankAccount.active)}
						</MapViewRow>
					</MapView>
				</Paper>
			</div>
		</div>
	);
};
