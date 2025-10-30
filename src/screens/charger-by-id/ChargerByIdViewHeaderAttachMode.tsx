import { useEffect, useState } from 'react';

import dayjs from 'dayjs';

import { LoadingButton } from '@/ui/LoadingButton';
import { SaveWidthContainer } from '@/ui/SaveWidthContainer';

import { useAttachModeChargerMutation } from '@/entities/charger/charger.query';

import { DateConverter } from '@/shared/utils/converters/date-converter';

interface Props {
	className?: string;
	chargerId: number;
	remainingAttachModeDuration: string | null;
}

export const ChargerByIdViewHeaderAttachMode = ({
	className,
	chargerId,
	remainingAttachModeDuration
}: Props) => {
	const { isPending, mutate } = useAttachModeChargerMutation(chargerId);

	const [timer, setTimer] = useState(
		remainingAttachModeDuration === null
			? 0
			: DateConverter.JSONToDayjsDuration(
					remainingAttachModeDuration
				).asSeconds()
	);

	const isTimerActive = timer > 0;

	const timerFormat = isTimerActive
		? dayjs(timer * 1000).format('mm:ss')
		: undefined;

	const handleClick = () => {
		mutate(undefined, {
			onSuccess(data) {
				setTimer(DateConverter.JSONToDayjsDuration(data.time).asSeconds());
			}
		});
	};

	useEffect(() => {
		let intervalId: NodeJS.Timeout;

		if (isTimerActive) {
			intervalId = setInterval(() => {
				if (timer === 0) {
					clearInterval(intervalId);
				} else {
					setTimer(prev => prev - 1);
				}
			}, 1000);
		}

		return () => clearInterval(intervalId);
	}, [isTimerActive]);

	return (
		<LoadingButton
			className={className}
			variant='contained'
			disableRipple
			onClick={handleClick}
			loading={isPending}
			disabled={isTimerActive}
		>
			<SaveWidthContainer
				showFront={isTimerActive}
				frontSlot={
					<div className='flex items-center justify-center gap-2 text-black/60'>
						{timerFormat}
					</div>
				}
			>
				Перевести в режим приёма
			</SaveWidthContainer>
		</LoadingButton>
	);
};
