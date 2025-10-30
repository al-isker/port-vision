import Link from 'next/link';

import { Paper } from '@/ui/Paper';
import { Table } from '@/ui/Table';
import { TableBody } from '@/ui/TableBody';
import { TableCell } from '@/ui/TableCell';
import { TableContainer } from '@/ui/TableContainer';
import { TableHead } from '@/ui/TableHead';
import { TableRow } from '@/ui/TableRow';

import { IPartner } from '@/entities/partner/partner.type';
import { getPaymentMethodView } from '@/entities/partner/partner.view';

import { ROUTES } from '@/shared/config/routes/routes';
import { getPhoneView } from '@/shared/utils/views/phone-view';
import { getYesNoView } from '@/shared/utils/views/yes-no-view';

interface Props {
	partners: IPartner[];
}

export const PartnersBodyView = ({ partners }: Props) => {
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
						{partners.map(item => (
							<Link
								key={item.id}
								href={ROUTES.partnerById(item.id)}
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
