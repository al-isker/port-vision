'use client';

import { useRouter } from 'next/navigation';
import { useId } from 'react';

import { useCreateClientMutation } from '@/entities/client/client.query';
import { ClientFormCreate } from '@/entities/client/client.type';

import { ClientCreateFormHeader } from './ClientCreateFormHeader';
import { ClientCreateFormSchema } from './ClientCreateFormSchema';

export const ClientCreateForm = () => {
	const formId = useId();

	const router = useRouter();

	const clientMutation = useCreateClientMutation();

	const handleSubmit = (form: ClientFormCreate) => {
		clientMutation.mutate(form, {
			onSuccess: () => {
				router.back();
			}
		});
	};

	return (
		<div className='space-y-space h-full'>
			<ClientCreateFormHeader
				formId={formId}
				loading={clientMutation.isPending}
			/>
			<ClientCreateFormSchema
				formId={formId}
				disabled={clientMutation.isPending}
				onSubmit={handleSubmit}
			/>
		</div>
	);
};
