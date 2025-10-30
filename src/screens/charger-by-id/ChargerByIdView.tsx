'use client';

import { useRef } from 'react';

import { QRCodeCanvas } from 'qrcode.react';

import { Button } from '@/ui/Button';
import { MapView } from '@/ui/MapView';
import { MapViewRow } from '@/ui/MapViewItem';
import { Paper } from '@/ui/Paper';

import { IChargerType } from '@/entities/charger-type/charger-type.type';
import { ICharger } from '@/entities/charger/charger.type';
import { getChargerStatusView } from '@/entities/charger/charger.view';
import { IClientTariff } from '@/entities/client-tariff/client-tariff.type';
import { IPartner } from '@/entities/partner/partner.type';
import { getPaymentMethodView } from '@/entities/partner/partner.view';
import { IReferrer } from '@/entities/referrer/referrer.type';

import { getPhoneView } from '@/shared/utils/views/phone-view';
import { getRublesView } from '@/shared/utils/views/rubles-view';
import { getYesNoView } from '@/shared/utils/views/yes-no-view';

import { ChargerByIdViewHeader } from './ChargerByIdViewHeader';

interface Props {
	charger: ICharger;
	chargerType?: IChargerType;
	partner?: IPartner;
	referrer?: IReferrer;
	clientTariff?: IClientTariff;
}

export const ChargerByIdView = ({
	charger,
	chargerType,
	partner,
	referrer,
	clientTariff
}: Props) => {
	const qrCodeRef = useRef<HTMLCanvasElement>(null);

	const handleDownloadQRCode = () => {
		const element = document.createElement('a');

		element.href = qrCodeRef.current!.toDataURL('image/png');
		element.download = `${charger.name}.png`;
		element.click();
	};

	return (
		<div className='h-full space-y-space'>
			<ChargerByIdViewHeader
				chargerId={charger.id}
				chargerName={charger.name}
				remainingAttachModeDuration={charger.remainingAttachModeDuration}
			/>

			<div className='grid grid-cols-2 gap-6'>
				<Paper>
					<MapView title='Основные данные'>
						<MapViewRow label='ID'>{charger.id}</MapViewRow>
						<MapViewRow label='Название'>{charger.name}</MapViewRow>
						<MapViewRow label='Модель'>{charger.model}</MapViewRow>
						<MapViewRow label='Статус'>
							{getChargerStatusView(charger.status)}
						</MapViewRow>
						<MapViewRow label='Адрес'>{charger.address}</MapViewRow>
					</MapView>
				</Paper>

				<Paper>
					<MapView
						innerClassName='flex justify-between gap-space-sm'
						title='QR-код'
					>
						<QRCodeCanvas
							ref={qrCodeRef}
							size={140}
							value={charger.qrCodeUrl}
						/>

						<Button className='self-end' onClick={handleDownloadQRCode}>
							Скачать
						</Button>
					</MapView>
				</Paper>

				{chargerType && (
					<Paper>
						<MapView title='Тип'>
							<MapViewRow label='ID'>{chargerType.id}</MapViewRow>
							<MapViewRow label='Название'>{chargerType.name}</MapViewRow>
							<MapViewRow label='Опции'>{chargerType.options}</MapViewRow>
						</MapView>
					</Paper>
				)}

				{partner && (
					<Paper>
						<MapView title='Партнёр'>
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
								{getYesNoView(partner?.active)}
							</MapViewRow>
						</MapView>
					</Paper>
				)}

				{referrer && (
					<Paper>
						<MapView title='Реферрер'>
							<MapViewRow label='ID'>{referrer.id}</MapViewRow>
							<MapViewRow label='Имя'>{referrer.name}</MapViewRow>
							<MapViewRow label='Email'>{referrer.email}</MapViewRow>
							<MapViewRow label='Номер телефона'>
								{getPhoneView(referrer.phone)}
							</MapViewRow>
							<MapViewRow label='Комментарий'>{referrer.comment}</MapViewRow>
							<MapViewRow label='Метод оплаты'>
								{getPaymentMethodView(referrer.paymentMethod)}
							</MapViewRow>
							<MapViewRow label='Активный'>
								{getYesNoView(referrer.active)}
							</MapViewRow>
						</MapView>
					</Paper>
				)}

				{clientTariff && (
					<Paper>
						<MapView title='Тариф клиента'>
							<MapViewRow label='ID'>{clientTariff.id}</MapViewRow>
							<MapViewRow label='Название'>{clientTariff.name}</MapViewRow>
							<MapViewRow label='Цена за первый час'>
								{getRublesView(clientTariff.priceFirstHour)}
							</MapViewRow>
							<MapViewRow label='Цена после первого часа'>
								{getRublesView(clientTariff.priceNext)}
							</MapViewRow>
							<MapViewRow label='Штраф'>
								{getRublesView(clientTariff.penalty)}
							</MapViewRow>
						</MapView>
					</Paper>
				)}
			</div>
		</div>
	);
};
