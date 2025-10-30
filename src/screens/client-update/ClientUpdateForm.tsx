'use client';

import { useRouter } from 'next/navigation';
import { useId } from 'react';

import { useUpdateClientMutation } from '@/entities/client/client.query';
import { ClientFormUpdate, IClient } from '@/entities/client/client.type';

import { ClientUpdateFormHeader } from './ClientUpdateFormHeader';
import { ClientUpdateFormSchema } from './ClientUpdateFormSchema';

interface Props {
	client: IClient;
}

export const ClientUpdateForm = ({ client }: Props) => {
	const formId = useId();

	const router = useRouter();

	const clientMutation = useUpdateClientMutation(client.id);

	const handleSubmit = (form: ClientFormUpdate) => {
		clientMutation.mutate(form, {
			onSuccess: () => {
				router.back();
			}
		});
	};

	return (
		<div className='space-y-space h-full'>
			<ClientUpdateFormHeader
				formId={formId}
				loading={clientMutation.isPending}
				clientName={client.name}
			/>
			<ClientUpdateFormSchema
				client={client}
				formId={formId}
				disabled={clientMutation.isPending}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};
