import { HTMLAttributes } from 'react';

import clsx from 'clsx';

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Container = ({ className, ...restProps }: Props) => (
	<div
		className={clsx('px-container h-full w-full', className)}
		{...restProps}
	/>
);
