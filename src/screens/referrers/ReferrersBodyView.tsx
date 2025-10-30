'use client';

import Link from 'next/link';

import { TableContainer } from '@mui/material';

import { Paper } from '@/ui/Paper';
import { Table } from '@/ui/Table';
import { TableBody } from '@/ui/TableBody';
import { TableCell } from '@/ui/TableCell';
import { TableHead } from '@/ui/TableHead';
import { TableRow } from '@/ui/TableRow';

import { getPaymentMethodView } from '@/entities/partner/partner.view';
import { IReferrer } from '@/entities/referrer/referrer.type';

import { ROUTES } from '@/shared/config/routes/routes';
import { getPhoneView } from '@/shared/utils/views/phone-view';
import { getYesNoView } from '@/shared/utils/views/yes-no-view';

interface Props {
	referrers: IReferrer[];
}

export const ReferrersBodyView = ({ referrers }: Props) => {
	return (
		<Paper className='overflow-hidden' disablePadding>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Имя</TableCell>
							<TableCell>Email</TableCell>
							<TableCell>Номер телефона</TableCell>
							<TableCell>Метод оплаты</TableCell>
							<TableCell>Активный</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{referrers.map(item => (
							<Link
								key={item.id}
								href={ROUTES.referrerById(item.id)}
								passHref
								legacyBehavior
							>
								<TableRow hover>
									<TableCell>{item.id}</TableCell>
									<TableCell>{item.name}</TableCell>
									<TableCell>{item.email}</TableCell>
									<TableCell>{getPhoneView(item.phone)}</TableCell>
									<TableCell>
										{getPaymentMethodView(item.paymentMethod)}
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
