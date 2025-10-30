import { Controller, ControllerProps, FieldValues } from 'react-hook-form';

import { multiple } from '@/shared/utils/functions/multiple';

import { Select, SelectProps, SelectVariants } from './Select';

type Props<
	FV extends FieldValues,
	Var extends SelectVariants = SelectVariants
> = Omit<ControllerProps<FV>, 'render'> &
	Omit<
		SelectProps<Var>,
		'inputRef' | 'name' | 'value' | 'defaultValue' | 'disabled'
	>;

export const RHFSelect = <
	FV extends FieldValues,
	Var extends SelectVariants = SelectVariants
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
}: Props<FV, Var>) => {
	// @ts-ignore
	const isMultiple = restProps.slotProps?.select?.multiple;

	return (
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
				<Select
					inputRef={ref}
					name={name}
					value={value === undefined ? (isMultiple ? [] : '') : value}
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
};
