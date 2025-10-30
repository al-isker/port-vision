import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { RHFTextField } from '@/smart-ui/text-field/RHFTextField';

import { LoadingButton } from '@/ui/LoadingButton';

import {
	useCreateMediaMutation,
	useDeleteMediaMutation
} from '@/entities/media/media.query';
import { MediaFormCreate, TargetTypeEnum } from '@/entities/media/media.type';
import { mediaFormCreateSchema } from '@/entities/media/media.zod';

type Props = {
	chargerPlaceId: number;
	file: File;
	onDeleteSuccess: (file: File) => void;
	disabled?: boolean;
};

export const ChargerPlaceUpdateFormSchemaNewImage = ({
	chargerPlaceId,
	file,
	onDeleteSuccess,
	disabled
}: Props) => {
	const { control, getValues } = useForm<MediaFormCreate>({
		resolver: zodResolver(mediaFormCreateSchema),
		defaultValues: { orderPosition: 10 }
	});

	const mediaCreateMutation = useCreateMediaMutation();

	const mediaDeleteMutation = useDeleteMediaMutation();

	const handleSave = () => {
		const { orderPosition } = getValues();

		mediaCreateMutation.mutate({
			targetId: chargerPlaceId,
			targetType: TargetTypeEnum.CHARGER_PLACE,
			file,
			orderPosition
		});
	};

	const handleDelete = () => {
		const mediaId = mediaCreateMutation.data!.id;

		mediaDeleteMutation.mutate(mediaId, {
			onSuccess: () => onDeleteSuccess(file)
		});
	};

	return (
		<div className='flex flex-col gap-y-3'>
			<img className='h-40 rounded' src={URL.createObjectURL(file)} />

			<RHFTextField
				fullWidth
				label='Номер'
				name='orderPosition'
				type='number'
				control={control}
				disabled={disabled}
			/>

			{!mediaCreateMutation.isSuccess ? (
				<LoadingButton
					fullWidth
					variant='contained'
					size='small'
					loading={mediaCreateMutation.isPending}
					disabled={disabled}
					onClick={handleSave}
				>
					Сохранить
				</LoadingButton>
			) : (
				<LoadingButton
					fullWidth
					variant='contained'
					size='small'
					color='error'
					loading={mediaDeleteMutation.isPending}
					disabled={disabled}
					onClick={handleDelete}
				>
					Удалить
				</LoadingButton>
			)}
		</div>
	);
};
