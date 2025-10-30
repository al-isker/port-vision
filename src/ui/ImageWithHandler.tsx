import { ImgHTMLAttributes, useState } from 'react';

import { ImageNotSupported } from '@mui/icons-material';
import clsx from 'clsx';

import { multiple } from '@/shared/utils/functions/multiple';

type Props = ImgHTMLAttributes<HTMLImageElement>;

export const ImageWithHandler = ({ onError, ...restProps }: Props) => {
	const [isError, setIsError] = useState(false);

	const handleError = () => {
		setIsError(true);
	};

	return !restProps.src || isError ? (
		<div
			className={clsx(
				'flex items-center justify-center bg-black/10 p-space-sm',
				restProps.className
			)}
		>
			<ImageNotSupported className='text-black/50' fontSize='large' />
		</div>
	) : (
		<img onError={multiple(handleError, onError)} {...restProps} />
	);
};
