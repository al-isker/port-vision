'use client';

import Link from 'next/link';

import { Paper } from '@/ui/Paper';
import { Table } from '@/ui/Table';
import { TableBody } from '@/ui/TableBody';
import { TableCell } from '@/ui/TableCell';
import { TableContainer } from '@/ui/TableContainer';
import { TableHead } from '@/ui/TableHead';
import { TableRow } from '@/ui/TableRow';

import { IExchangeGroup } from '@/entities/exchange-group/exchange-group.type';

import { ROUTES } from '@/shared/config/routes/routes';
import { getCountItemsView } from '@/shared/utils/views/count-items-view';

interface Props {
	exchangeGroups: IExchangeGroup[];
}

export const ExchangeGroupsBodyView = ({ exchangeGroups }: Props) => {
	return (
		<Paper className='overflow-hidden' disablePadding>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Название</TableCell>
							<TableCell>Кол-во зарядных устройств</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{exchangeGroups.map(item => (
							<Link
								key={item.id}
								href={ROUTES.exchangeGroupById(item.id)}
								passHref
								legacyBehavior
							>
								<TableRow hover>
									<TableCell>{item.id}</TableCell>
									<TableCell>{item.name}</TableCell>
									<TableCell>
										{getCountItemsView(item.chargers.length)}
									</TableCell>
								</TableRow>
							</Link>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
};
