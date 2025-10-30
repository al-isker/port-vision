import { nullOption } from '@/shared/constants/options/null';
import { Option } from '@/shared/types/base';

export const withNullOption = (options: Option[]) => {
	return [nullOption, ...options];
};
