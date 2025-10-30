'use client';

import { MapView } from '@/ui/MapView';
import { MapViewRow } from '@/ui/MapViewItem';
import { Paper } from '@/ui/Paper';

import { IClient } from '@/entities/client/client.type';

import { getPhoneView } from '@/shared/utils/views/phone-view';

import { ClientByIdViewHeader } from './ClientByIdViewHeader';

interface Props {
	client: IClient;
}

export const ClientByIdView = ({ client }: Props) => {
	return (
		<div className='h-full space-y-space'>
			<ClientByIdViewHeader clientId={client.id} clientName={client.name} />

			<div className='grid grid-cols-2 gap-6'>
				<Paper>
					<MapView title='Основные данные'>
						<MapViewRow label='ID'>{client.id}</MapViewRow>
						<MapViewRow label='Имя'>{client.name}</MapViewRow>
						<MapViewRow label='Номер телефона'>
							{getPhoneView(client.phone)}
						</MapViewRow>
					</MapView>
				</Paper>
			</div>
		</div>
	);
};
