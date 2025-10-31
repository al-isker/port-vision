import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { RHFTextField } from '@/smart-ui/text-field/RHFTextField';

import { LoadingButton } from '@/ui/LoadingButton';

import { useCreateCommentMutation } from '@/entities/comment/comment.query';

interface Props {
	id: number;
}

export const PortCreateComment = ({ id }: Props) => {
	const commentMutation = useCreateCommentMutation();

	const queryClient = useQueryClient();

	const { control, handleSubmit } = useForm({
		defaultValues: {
			author: '',
			text: '',
			portId: id
		}
	});

	const submit = (data: any) => {
		commentMutation.mutate(data, {
			onSuccess: () => {
				queryClient.invalidateQueries({
					queryKey: ['port', id],
					exact: true
				});
			}
		});
	};

	return (
		<form className='mt-3 space-y-2' onSubmit={handleSubmit(submit)}>
			<RHFTextField
				control={control}
				name='author'
				fullWidth
				placeholder='Автор'
			/>
			<RHFTextField
				control={control}
				name='text'
				fullWidth
				placeholder='комментарий'
			/>

			<LoadingButton
				type='submit'
				className='ml-auto mt-1.5 block'
				loading={commentMutation.isPending}
			>
				Отправить
			</LoadingButton>
		</form>
	);
};
