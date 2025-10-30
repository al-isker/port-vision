'use client';

import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { ROUTES } from '@/shared/config/routes/routes';

const IndexPage: NextPage = () => {
	const router = useRouter();

	useEffect(() => {
		router.replace(ROUTES.portMain());
	}, []);

	return null;
};

export default IndexPage;
