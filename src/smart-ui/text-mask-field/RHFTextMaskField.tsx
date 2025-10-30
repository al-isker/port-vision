import { Controller, ControllerProps, FieldValues } from 'react-hook-form';

import { multiple } from '@/shared/utils/functions/multiple';

import {
	TextMaskField,
	TextMaskFieldProps,
	TextMaskFieldVariants
} from './TextMaskField';

type Props<
	FV extends FieldValues,
	Var extends TextMaskFieldVariants = TextMaskFieldVariants
> = Omit<ControllerProps<FV>, 'render'> &
	Omit<
		TextMaskFieldProps<Var>,
		'inputRef' | 'name' | 'value' | 'defaultValue' | 'disabled'
	>;

export const RHFTextMaskField = <
	FV extends FieldValues,
	Var extends TextMaskFieldVariants = TextMaskFieldVariants
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
			<TextMaskField
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
