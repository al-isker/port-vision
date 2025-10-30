import { useQueryClient } from '@tanstack/react-query';

import { LoadingButton } from '@/ui/LoadingButton';

import { useRentAcbMutation } from '@/entities/acb/acb.query';

interface Props {
	className?: string;
	monitoringChargerId: number;
	acbUuid: string;
}

export const ChargerMonitoringByIdViewButton = ({
	className,
	monitoringChargerId,
	acbUuid
}: Props) => {
	const { isPending, mutate } = useRentAcbMutation(acbUuid);

	const queryClient = useQueryClient();

	const handleClick = () => {
		mutate(undefined, {
			onSuccess: async () => {
				await Promise.all([
					queryClient.invalidateQueries({
						queryKey: ['charger-monitoring']
					}),
					queryClient.invalidateQueries({
						queryKey: ['acb', 'charger', monitoringChargerId]
					})
				]);
			}
		});
	};

	return (
		<LoadingButton
			className={className}
			variant='contained'
			size='small'
			loading={isPending}
			onClick={handleClick}
		>
			Выдать
		</LoadingButton>
	);
};
