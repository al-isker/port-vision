import { useState } from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import { TextField, TextFieldProps, TextFieldVariants } from '@/ui/TextField';

type Props<Var extends TextFieldVariants = TextFieldVariants> = Omit<
	TextFieldProps<Var>,
	'type'
>;

export type {
	Props as PasswordFieldProps,
	TextFieldVariants as PasswordFieldVariants
};

export const PasswordField = <
	Var extends TextFieldVariants = TextFieldVariants
>(
	props: Props<Var>
) => {
	const [isShowPassword, setIsShowPassword] = useState(false);

	const toggleIsShowPassword = () => {
		setIsShowPassword(prev => !prev);
	};

	return (
		<TextField
			type={isShowPassword ? 'text' : 'password'}
			slotProps={{
				input: {
					endAdornment: (
						<IconButton
							edge='end'
							size={props.size ?? 'small'}
							onClick={toggleIsShowPassword}
						>
							{isShowPassword ? (
								<VisibilityOff fontSize='inherit' />
							) : (
								<Visibility fontSize='inherit' />
							)}
						</IconButton>
					)
				}
			}}
			{...props}
		/>
	);
};
