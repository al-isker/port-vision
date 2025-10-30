import { Controller, ControllerProps, FieldValues } from 'react-hook-form';

import { multiple } from '@/shared/utils/functions/multiple';

import { Checkbox, CheckboxProps } from './Checkbox';

type Props<FV extends FieldValues> = Omit<ControllerProps<FV>, 'render'> &
	Omit<
		CheckboxProps,
		| 'inputRef'
		| 'name'
		| 'value'
		| 'defaultValue'
		| 'checked'
		| 'defaultChecked'
		| 'disabled'
	>;

export const RHFCheckbox = <FV extends FieldValues>({
	control,
	name,
	rules,
	shouldUnregister,
	defaultValue,
	onChange: propOnChange,
	onBlur: propOnBlur,
	disabled,
	...restProps
}: Props<FV>) => (
	<Controller
		control={control}
		name={name}
		rules={rules}
		shouldUnregister={shouldUnregister}
		defaultValue={defaultValue}
		disabled={disabled}
		render={({
			field: { ref, name, value, onChange, onBlur, disabled },
			fieldState: { invalid }
		}) => (
			<Checkbox
				inputRef={ref}
				name={name}
				checked={value}
				onChange={multiple(onChange, propOnChange)}
				onBlur={multiple(onBlur, propOnBlur)}
				color={invalid ? 'error' : undefined}
				disabled={disabled}
				{...restProps}
			/>
		)}
	/>
);
