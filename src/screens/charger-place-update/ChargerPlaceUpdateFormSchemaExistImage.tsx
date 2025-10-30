import { TextField } from '@/smart-ui/text-field/TextField';

import { ImageWithHandler } from '@/ui/ImageWithHandler';
import { LoadingButton } from '@/ui/LoadingButton';

import { useDeleteMediaMutation } from '@/entities/media/media.query';

type Props = {
	image: {
		id: number;
		url: string;
		orderPosition: number;
	};
	onDeleteSuccess: (imageId: number) => void;
	disabled?: boolean;
};

export const ChargerPlaceUpdateFormSchemaExistImage = ({
	image,
	onDeleteSuccess,
	disabled
}: Props) => {
	const mediaDeleteMutation = useDeleteMediaMutation();

	const handleDelete = () => {
		mediaDeleteMutation.mutate(image.id, {
			onSuccess: () => onDeleteSuccess(image.id)
		});
	};

	return (
		<div className='flex flex-col gap-y-3'>
			<ImageWithHandler className='h-40 rounded' src={image.url} />

			<TextField
				fullWidth
				label='Номер'
				name='orderPosition'
				value={image.orderPosition}
				type='number'
				disabled
			/>

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
		</div>
	);
};
