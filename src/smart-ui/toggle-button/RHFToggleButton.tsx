import { Controller, ControllerProps, FieldValues } from 'react-hook-form';

import { multiple } from '@/shared/utils/functions/multiple';

import { ToggleButton, ToggleButtonProps } from './ToggleButton';

type Props<FV extends FieldValues, Val = unknown> = Omit<
	ControllerProps<FV>,
	'render'
> &
	Omit<
		ToggleButtonProps<Val>,
		'ref' | 'name' | 'value' | 'defaultValue' | 'disabled'
	>;

export const RHFToggleButton = <FV extends FieldValues, Val = unknown>({
	control,
	name,
	rules,
	shouldUnregister,
	defaultValue,
	onChange: propOnChange,
	onBlur: propOnBlur,
	disabled,
	...restProps
}: Props<FV, Val>) => {
	const isMultiple = !restProps.exclusive;

	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			shouldUnregister={shouldUnregister}
			defaultValue={defaultValue}
			disabled={disabled}
			render={({
				field: { value, onChange, onBlur, disabled },
				fieldState: { invalid }
			}) => (
				<ToggleButton
					value={value ?? (isMultiple ? [] : '')}
					color={invalid ? 'error' : undefined}
					onChange={(_, val) => multiple(onChange, propOnChange)(val)}
					onBlur={multiple(onBlur, propOnBlur)}
					disabled={disabled}
					{...restProps}
				/>
			)}
		/>
	);
};
