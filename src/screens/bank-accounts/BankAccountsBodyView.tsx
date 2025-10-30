'use client';

import Link from 'next/link';

import { Paper } from '@/ui/Paper';
import { Table } from '@/ui/Table';
import { TableBody } from '@/ui/TableBody';
import { TableCell } from '@/ui/TableCell';
import { TableContainer } from '@/ui/TableContainer';
import { TableHead } from '@/ui/TableHead';
import { TableRow } from '@/ui/TableRow';

import { IBankAccount } from '@/entities/bank-account/bank-account.type';
import { getBankAccountOwnerTypeView } from '@/entities/bank-account/bank-account.view';

import { ROUTES } from '@/shared/config/routes/routes';
import { getYesNoView } from '@/shared/utils/views/yes-no-view';

interface Props {
	bankAccount: IBankAccount[];
}

export const BankAccountsBodyView = ({ bankAccount }: Props) => {
	return (
		<Paper className='overflow-hidden' disablePadding>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Название</TableCell>
							<TableCell>ИНН</TableCell>
							<TableCell>КПП</TableCell>
							<TableCell>БИК</TableCell>
							<TableCell>Название банка</TableCell>
							<TableCell>Расчетный счет</TableCell>
							<TableCell>Юридический адрес</TableCell>
							<TableCell>Владелец</TableCell>
							<TableCell>Активный</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{bankAccount.map(item => (
							<Link
								key={item.id}
								href={ROUTES.bankAccountById(item.id)}
								passHref
								legacyBehavior
							>
								<TableRow hover>
									<TableCell>{item.id}</TableCell>
									<TableCell>{item.name}</TableCell>
									<TableCell>{item.inn}</TableCell>
									<TableCell>{item.kpp}</TableCell>
									<TableCell>{item.bik}</TableCell>
									<TableCell>{item.bankName}</TableCell>
									<TableCell>{item.paymentAccount}</TableCell>
									<TableCell>{item.legalAddress}</TableCell>
									<TableCell>
										{getBankAccountOwnerTypeView(item.ownerType)}
									</TableCell>
									<TableCell>{getYesNoView(item.active)}</TableCell>
								</TableRow>
							</Link>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
};
