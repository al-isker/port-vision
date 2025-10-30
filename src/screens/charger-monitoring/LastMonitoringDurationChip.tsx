import { Chip } from '@/ui/Chip';

import { DateConverter } from '@/shared/utils/converters/date-converter';

interface Props {
	className?: string;
	value: string;
}

export const LastMonitoringDurationChip = ({ className, value }: Props) => {
	const duration = DateConverter.JSONToDayjsDuration(value);

	const color = duration.asMinutes() < 5 ? 'success' : 'error';

	const label =
		duration.hours() +
		':' +
		duration.subtract(duration.milliseconds()).format('mm:ss');

	return <Chip className={className} color={color} label={label} />;
};
