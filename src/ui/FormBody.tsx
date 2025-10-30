import { Children, HTMLAttributes } from 'react';

import clsx from 'clsx';

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const FormBody = ({ children, className, ...restProps }: Props) => {
	const childrenCount = Children.count(children);

	if (childrenCount > 0) {
		return (
			<div className={clsx('h-full space-y-space', className)} {...restProps}>
				{Children.map(
					children,
					child =>
						!!child && (
							<div className='flex gap-x-space-sm'>
								<span className='block flex-shrink-0 basis-0.5 rounded bg-primary' />

								<div className='flex-grow'>{child}</div>
							</div>
						)
				)}
			</div>
		);
	}
};
