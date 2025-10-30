import { ChangeEvent } from 'react';

import { MenuItem } from '@/ui/MenuItem';
import { TextField, TextFieldProps, TextFieldVariants } from '@/ui/TextField';

import { Option } from '@/shared/types/base';

import { NULL_VALUE } from './null-value';

type Props<Var extends TextFieldVariants = TextFieldVariants> = Omit<
	TextFieldProps<Var>,
	'children' | 'select'
> & {
	options: Option[];
};

export type { Props as SelectProps, TextFieldVariants as SelectVariants };

export const Select = <Var extends TextFieldVariants = TextFieldVariants>({
	options,
	value,
	onChange,
	...restProps
}: Props<Var>) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			if (e.target.value === NULL_VALUE) {
				e.target.value = null as any;
			}

			onChange(e);
		}
	};

	return (
		<TextField
			select
			value={value === null ? NULL_VALUE : value}
			onChange={handleChange}
			{...restProps}
		>
			{options.map(item => (
				<MenuItem
					key={String(item.value)}
					value={item.value === null ? NULL_VALUE : (item.value as any)}
					dense={!restProps.size || restProps.size === 'small'}
				>
					{item.label}
				</MenuItem>
			))}
		</TextField>
	);
};
