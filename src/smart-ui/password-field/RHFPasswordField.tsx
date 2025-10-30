import { Controller, ControllerProps, FieldValues } from 'react-hook-form';

import { multiple } from '@/shared/utils/functions/multiple';

import {
	PasswordField,
	PasswordFieldProps,
	PasswordFieldVariants
} from './PasswordField';

type Props<
	FV extends FieldValues,
	Var extends PasswordFieldVariants = PasswordFieldVariants
> = Omit<ControllerProps<FV>, 'render'> &
	Omit<
		PasswordFieldProps<Var>,
		'inputRef' | 'name' | 'value' | 'defaultValue' | 'disabled'
	>;

export const RHFPasswordField = <
	FV extends FieldValues,
	Var extends PasswordFieldVariants = PasswordFieldVariants
>({
	control,
	name,
	rules,
	shouldUnregister,
	defaultValue,
	onChange: propOnChange,
	onBlur: propOnBlur,
	disabled,
	...restProps
}: Props<FV, Var>) => (
	<Controller
		control={control}
		name={name}
		rules={rules}
		shouldUnregister={shouldUnregister}
		defaultValue={defaultValue}
		disabled={disabled}
		render={({
			field: { ref, name, value, onChange, onBlur, disabled },
			fieldState: { error, invalid }
		}) => (
			<PasswordField
				inputRef={ref}
				name={name}
				value={value ?? ''}
				helperText={error?.message}
				onChange={multiple(onChange, propOnChange)}
				onBlur={multiple(onBlur, propOnBlur)}
				error={invalid}
				disabled={disabled}
				{...restProps}
			/>
		)}
	/>
);
