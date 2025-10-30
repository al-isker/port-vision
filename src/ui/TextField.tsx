'use client';

import {
	CircularProgress,
	InputAdornment,
	TextField as MUITextField,
	TextFieldProps,
	TextFieldVariants
} from '@mui/material';
import { deepmerge } from '@mui/utils';

type Props<Var extends TextFieldVariants = TextFieldVariants> = Omit<
	TextFieldProps<Var>,
	''
> & {
	loading?: boolean;
};

export type { Props as TextFieldProps, TextFieldVariants };

export const TextField = <Var extends TextFieldVariants = TextFieldVariants>({
	size,
	slotProps,
	loading,
	...restProps
}: Props<Var>) => (
	<MUITextField
		size={size ?? 'small'}
		slotProps={deepmerge(
			slotProps ?? {},
			loading && {
				input: {
					endAdornment: (
						<InputAdornment position='end'>
							<CircularProgress size={18} />
						</InputAdornment>
					)
				}
			}
		)}
		{...restProps}
	/>
);
