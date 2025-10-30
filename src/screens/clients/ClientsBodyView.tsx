'use client';

import Link from 'next/link';

import { Paper } from '@/ui/Paper';
import { Table } from '@/ui/Table';
import { TableBody } from '@/ui/TableBody';
import { TableCell } from '@/ui/TableCell';
import { TableContainer } from '@/ui/TableContainer';
import { TableHead } from '@/ui/TableHead';
import { TableRow } from '@/ui/TableRow';

import { IClient } from '@/entities/client/client.type';

import { ROUTES } from '@/shared/config/routes/routes';
import { getPhoneView } from '@/shared/utils/views/phone-view';

interface Props {
	clients: IClient[];
}

export const ClientsBodyView = ({ clients }: Props) => {
	return (
		<Paper className='overflow-hidden' disablePadding>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Имя</TableCell>
							<TableCell>Номер телефона</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{clients.map(item => (
							<Link
								key={item.id}
								href={ROUTES.clientById(item.id)}
								passHref
								legacyBehavior
							>
								<TableRow hover>
									<TableCell>{item.id}</TableCell>
									<TableCell>{item.name}</TableCell>
									<TableCell>{getPhoneView(item.phone)}</TableCell>
								</TableRow>
							</Link>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
};
