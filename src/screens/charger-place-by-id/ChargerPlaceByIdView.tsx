'use client';

import { ImageList } from '@/ui/ImageList';
import { ImageListItem } from '@/ui/ImageListItem';
import { ImageWithHandler } from '@/ui/ImageWithHandler';
import { MapView } from '@/ui/MapView';
import { MapViewRow } from '@/ui/MapViewItem';
import { Paper } from '@/ui/Paper';

import { IChargerPlaceById } from '@/entities/charger-place/charger-place.type';
import { IPartner } from '@/entities/partner/partner.type';
import { getPaymentMethodView } from '@/entities/partner/partner.view';

import { getWeekdayView, weekdayOrder } from '@/shared/constants/date/weekday';
import { isFilledArray } from '@/shared/utils/checks/is-filled-array';
import { sortByEnumOrder } from '@/shared/utils/sort/sort-by-enum';
import { getOnlyTimeView } from '@/shared/utils/views/only-time-view';
import { getPhoneView } from '@/shared/utils/views/phone-view';
import { getRublesView } from '@/shared/utils/views/rubles-view';
import { getYesNoView } from '@/shared/utils/views/yes-no-view';

import { ChargerPlaceByIdViewHeader } from './ChargerPlaceByIdViewHeader';

interface Props {
	chargerPlace: IChargerPlaceById;
	partner?: IPartner;
}

export const ChargerPlaceByIdView = ({ chargerPlace, partner }: Props) => {
	const sortedSchedule = sortByEnumOrder(
		chargerPlace.schedule,
		weekdayOrder,
		item => item.weekday
	);

	return (
		<div className='h-full space-y-space'>
			<ChargerPlaceByIdViewHeader
				chargerPlaceId={chargerPlace.id}
				chargerPlaceName={chargerPlace.address}
			/>

			<div className='grid grid-cols-2 gap-6'>
				<Paper>
					<MapView title='Основные данные'>
						<MapViewRow label='ID'>{chargerPlace.id}</MapViewRow>
						<MapViewRow label='Адрес'>{chargerPlace.address}</MapViewRow>
						<MapViewRow label='Сумма аренды'>
							{getRublesView(chargerPlace.rentAmount)}
						</MapViewRow>
						<MapViewRow label='Комментарий'>
							{chargerPlace.locationHint}
						</MapViewRow>
					</MapView>
				</Paper>

				{partner && (
					<Paper>
						<MapView title='Владелец'>
							<MapViewRow label='ID'>{partner.id}</MapViewRow>
							<MapViewRow label='Имя'>{partner.name}</MapViewRow>
							<MapViewRow label='Email'>{partner.email}</MapViewRow>
							<MapViewRow label='Номер телефона'>
								{getPhoneView(partner.phone)}
							</MapViewRow>
							<MapViewRow label='Комментарий'>{partner.comment}</MapViewRow>
							<MapViewRow label='Метод оплаты'>
								{getPaymentMethodView(partner.paymentMethod)}
							</MapViewRow>
							<MapViewRow label='Активный'>
								{getYesNoView(partner.active)}
							</MapViewRow>
						</MapView>
					</Paper>
				)}

				<Paper>
					<MapView title='Расписание'>
						{sortedSchedule.map(item => (
							<MapViewRow
								key={item.weekday}
								label={getWeekdayView(item.weekday)}
							>
								{item.working
									? `${getOnlyTimeView(item.openAt, 'H:mm')} - ${getOnlyTimeView(item.closeAt, 'H:mm')}`
									: 'закрыто'}
							</MapViewRow>
						))}
					</MapView>
				</Paper>

				{isFilledArray(chargerPlace.images) && (
					<Paper className='col-span-2'>
						<MapView title='Фотографии'>
							<ImageList variant='masonry' cols={3} gap={12}>
								{chargerPlace.images.map(item => (
									<ImageListItem key={item.id}>
										<ImageWithHandler
											className='rounded'
											src={item.url}
											alt={chargerPlace.address}
										/>
									</ImageListItem>
								))}
							</ImageList>
						</MapView>
					</Paper>
				)}
			</div>
		</div>
	);
};
