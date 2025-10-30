import { FormControlLabelProps, SwitchProps } from '@mui/material';
import clsx from 'clsx';

import { FormControlLabel } from '@/ui/FormControlLabel';
import { Switch as MUISwitch } from '@/ui/Switch';

type Props = SwitchProps &
	Partial<Pick<FormControlLabelProps, 'label' | 'labelPlacement'>> & {
		classNameLabel?: string;
	};

export type { Props as SwitchProps };

export const Switch = ({
	label,
	labelPlacement,
	classNameLabel,
	...restProps
}: Props) => {
	if (label) {
		const isSmallSize = restProps.size === 'small';
		const isPlacementStart = labelPlacement === 'start';
		const isPlacementEnd = !labelPlacement || labelPlacement === 'end';

		return (
			<FormControlLabel
				className={clsx(
					'text-nowrap',
					{
						'gap-x-0.5': isSmallSize,
						'ml-0': isPlacementStart,
						'-ml-1.5': isSmallSize && isPlacementEnd
					},
					classNameLabel
				)}
				slotProps={{ typography: { fontSize: restProps.size } }}
				label={label}
				labelPlacement={labelPlacement}
				required={restProps.required}
				disabled={restProps.disabled}
				control={<MUISwitch {...restProps} />}
			/>
		);
	}

	return <MUISwitch {...restProps} />;
};
