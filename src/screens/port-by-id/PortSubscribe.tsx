import { useState } from 'react';

import { Modal } from '@mui/material';
import { useForm } from 'react-hook-form';

import { RHFTextField } from '@/smart-ui/text-field/RHFTextField';

import { Button } from '@/ui/Button';
import { LoadingButton } from '@/ui/LoadingButton';
import { Paper } from '@/ui/Paper';

import { useCreateSubscriptionMutation } from '@/entities/subscription/subscription.query';

interface Props {
	id: number;
}

export const PortSubscribe = ({ id }: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	const subscriptionMutation = useCreateSubscriptionMutation();

	const { control, handleSubmit } = useForm({
		defaultValues: {
			eventType: 'COMMENT',
			mail: '',
			targetId: id
		}
	});

	const submit = (data: any) => {
		subscriptionMutation.mutate(data, {
			onSuccess: () => {
				setIsOpen(false);
			}
		});
	};

	return (
		<>
			<Button
				fullWidth
				className='mt-space-sm'
				variant='contained'
				color='error'
				onClick={() => setIsOpen(true)}
			>
				Подписаться на уведомления
			</Button>

			<Modal
				className='flex items-center justify-center'
				open={isOpen}
				onClose={() => setIsOpen(false)}
			>
				<Paper className='w-[80%]'>
					<form onSubmit={handleSubmit(submit)}>
						<RHFTextField
							control={control}
							name='mail'
							fullWidth
							placeholder='Эл. почта'
						/>

						<span className='mt-1 block text-center text-xs text-black/40'>
							проверьте почту после отправки
						</span>

						<LoadingButton
							type='submit'
							className='ml-auto mt-1.5 block'
							loading={subscriptionMutation.isPending}
						>
							Отправить
						</LoadingButton>
					</form>
				</Paper>
			</Modal>
		</>
	);
};
