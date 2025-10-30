import { Controller, ControllerProps, FieldValues } from 'react-hook-form';

import { multiple } from '@/shared/utils/functions/multiple';

import { TextField, TextFieldProps, TextFieldVariants } from './TextField';

type Props<
	FV extends FieldValues,
	Var extends TextFieldVariants = TextFieldVariants
> = Omit<ControllerProps<FV>, 'render'> &
	Omit<
		TextFieldProps<Var>,
		'inputRef' | 'name' | 'value' | 'defaultValue' | 'disabled'
	>;

export const RHFTextField = <
	FV extends FieldValues,
	Var extends TextFieldVariants = TextFieldVariants
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
			<TextField
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
