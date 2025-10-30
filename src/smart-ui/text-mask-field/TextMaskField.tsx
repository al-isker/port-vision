import { ChangeEvent, useEffect } from 'react';

import { composeRefs } from '@radix-ui/react-compose-refs';
import { ReactMaskOpts, useIMask } from 'react-imask';

import { TextField, TextFieldProps, TextFieldVariants } from '@/ui/TextField';

type Props<Var extends TextFieldVariants = TextFieldVariants> = Omit<
	TextFieldProps<Var>,
	''
> & {
	mask: ReactMaskOpts;
};

export type {
	Props as TextMaskFieldProps,
	TextFieldVariants as TextMaskFieldVariants
};

export const TextMaskField = <
	Var extends TextFieldVariants = TextFieldVariants
>({
	mask,
	inputRef,
	value,
	onChange,
	...restProps
}: Props<Var>) => {
	const imask = useIMask(mask);

	useEffect(() => {
		if (value) {
			imask.setValue(String(value));
		}
	}, [value]);

	useEffect(() => {
		if (restProps.name && onChange) {
			const fakeEvent = {
				target: {
					name: restProps.name,
					value: imask.unmaskedValue
				}
			};

			onChange(fakeEvent as ChangeEvent<HTMLInputElement>);
		}
	}, [imask.unmaskedValue]);

	return (
		<TextField
			inputRef={composeRefs(imask.ref, inputRef)}
			value={imask.value}
			{...restProps}
		/>
	);
};
