import { useCallback, useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import { nanoid } from 'nanoid';
import { useSnackbar } from 'notistack';
import { FileRejection, useDropzone } from 'react-dropzone';

import { Dropzone } from '@/ui/Dropzone';
import { FormBody } from '@/ui/FormBody';
import { FormHeader } from '@/ui/FormHeader';
import { FormSection } from '@/ui/FormSection';

import { IChargerPlaceById } from '@/entities/charger-place/charger-place.type';

import { dropFileMessage } from '@/shared/constants/messages/drop-file';

import { ChargerPlaceUpdateFormSchemaExistImage } from './ChargerPlaceUpdateFormSchemaExistImage';
import { ChargerPlaceUpdateFormSchemaNewImage } from './ChargerPlaceUpdateFormSchemaNewImage';

interface Props {
	chargerPlace: IChargerPlaceById;
	number: number;
	disabled?: boolean;
}

export const ChargerPlaceUpdateFormSchemaImages = ({
	chargerPlace,
	number,
	disabled
}: Props) => {
	const snackbar = useSnackbar();

	const queryClient = useQueryClient();

	const [newImages, setNewImages] = useState<{ id: string; file: File }[]>([]);

	const handleDropAccepted = useCallback((files: File[]) => {
		const newImages = files.map(file => ({
			id: nanoid(),
			file
		}));

		setNewImages(prev => [...prev, ...newImages]);
	}, []);

	const handleDropRejected = useCallback((fileRejections: FileRejection[]) => {
		for (const { errors } of fileRejections) {
			for (const error of errors) {
				snackbar.enqueueSnackbar(dropFileMessage.getByError(error.code), {
					variant: 'error'
				});
			}
		}
	}, []);

	const handleDeleteNewImage = (file: File) => {
		setNewImages(prev => prev.filter(item => item.file.name !== file.name));
	};

	const handleDeleteSuccessExistImage = (imageId: number) => {
		queryClient.setQueryData(
			['charger-place', chargerPlace.id],
			(prev: IChargerPlaceById) => {
				return {
					...prev,
					images: prev.images.filter(item => item.id !== imageId)
				};
			}
		);
	};

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		accept: { 'image/*': [] },
		maxSize: 1024 * 1024,
		multiple: true,
		disabled,
		onDropAccepted: handleDropAccepted,
		onDropRejected: handleDropRejected
	});

	return (
		<FormSection>
			<FormHeader number={number} title='Фотографии' />

			<FormBody>
				<Dropzone
					className='h-40 w-full'
					disabled={disabled}
					drag={isDragActive}
					{...getRootProps()}
				>
					<input {...getInputProps()} />
				</Dropzone>

				{!!(chargerPlace.images.length + newImages.length) && (
					<div className='flex flex-wrap gap-space-sm'>
						{chargerPlace.images.map(image => (
							<ChargerPlaceUpdateFormSchemaExistImage
								key={image.id}
								image={image}
								onDeleteSuccess={handleDeleteSuccessExistImage}
								disabled={disabled}
							/>
						))}

						{newImages.map(newImage => (
							<ChargerPlaceUpdateFormSchemaNewImage
								key={newImage.id}
								chargerPlaceId={chargerPlace.id}
								file={newImage.file}
								onDeleteSuccess={handleDeleteNewImage}
								disabled={disabled}
							/>
						))}
					</div>
				)}
			</FormBody>
		</FormSection>
	);
};
