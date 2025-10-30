import { MouseEvent } from 'react';

import { ToggleButton } from '@/smart-ui/toggle-button/ToggleButton';

import { ChargerStatusEnum } from '@/entities/charger/charger.type';

import { FILTER_STATUS_NAME } from '@/shared/config/search-params/search-params.names';
import { allOption } from '@/shared/constants/options/all';
import { useGetSearchParams } from '@/shared/hooks/useGetSearchParams';
import { useRouterSearchParams } from '@/shared/hooks/useRouterSearchParams';
import { Option } from '@/shared/types/base';

type ValueType = typeof allOption.value | ChargerStatusEnum.ACTIVE;

export const BindChargersToEmployeeUpdateFormSchemaRestFilterActive = () => {
	const { status } = useGetSearchParams(FILTER_STATUS_NAME);

	const routerSearchParams = useRouterSearchParams();

	const value = status ?? allOption.value;

	const handleChange = (_: MouseEvent<HTMLElement>, value: ValueType) => {
		if (value === ChargerStatusEnum.ACTIVE) {
			routerSearchParams.set(FILTER_STATUS_NAME, value);
		} else if (value === allOption.value) {
			routerSearchParams.delete(FILTER_STATUS_NAME);
		}
	};

	return (
		<ToggleButton
			className='text-nowrap'
			exclusive
			buttons={Array<Option<ValueType>>(allOption, {
				value: ChargerStatusEnum.ACTIVE,
				label: 'Активные'
			})}
			value={value}
			onChange={handleChange}
		/>
	);
};
