import { Metadata } from 'next';

import { ReferrerTariffs } from '@/screens/referrer-tariffs/ReferrerTariffs';

export const metadata: Metadata = {
	title: 'Тарифы реферреров'
};

const ReferrerTariffsPage = () => <ReferrerTariffs />;

export default ReferrerTariffsPage;
