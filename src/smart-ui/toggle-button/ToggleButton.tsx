import { ToggleButtonGroupProps } from '@mui/material';

import { ToggleButton as MUIToggleButton } from '@/ui/ToggleButton';
import { ToggleButtonGroup } from '@/ui/ToggleButtonGroup';

import { Option } from '@/shared/types/base';

type Props<Val = unknown> = Omit<ToggleButtonGroupProps, 'children'> & {
	buttons: Option<Val>[];
};

export type { Props as ToggleButtonProps };

export const ToggleButton = <Val = unknown,>({
	size,
	color,
	buttons,
	...restProps
}: Props<Val>) => {
	return (
		<ToggleButtonGroup
			size={size ?? 'small'}
			color={color ?? 'primary'}
			{...restProps}
		>
			{buttons.map(item => (
				<MUIToggleButton key={String(item.value)} value={item.value as any}>
					{item.label}
				</MUIToggleButton>
			))}
		</ToggleButtonGroup>
	);
};
