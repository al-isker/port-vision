'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { RHFSelect } from '@/smart-ui/select/RHFSelect';

import { Button } from '@/ui/Button';
import { Paper } from '@/ui/Paper';

import { REPORT_WHERE_POWERBANK_NAMES } from '@/entities/report-where-powerbank/report-where-powerbank.const';
import { reportWherePowerbankLocatorOptions } from '@/entities/report-where-powerbank/report-where-powerbank.options';
import { ReportWherePowerbankFormFilters } from '@/entities/report-where-powerbank/report-where-powerbank.type';
import { reportWherePowerbankFormFiltersSchema } from '@/entities/report-where-powerbank/report-where-powerbank.zod';

import { useGetSearchParams } from '@/shared/hooks/useGetSearchParams';

interface Props {
	onSubmit: SubmitHandler<ReportWherePowerbankFormFilters>;
}

export const ReportWherePowerbankFiltersFormSchema = ({ onSubmit }: Props) => {
	const params = useGetSearchParams(
		...Object.values(REPORT_WHERE_POWERBANK_NAMES)
	);

	const { control, handleSubmit } = useForm<ReportWherePowerbankFormFilters>({
		mode: 'onSubmit',
		defaultValues: params,
		resolver: zodResolver(reportWherePowerbankFormFiltersSchema)
	});

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Paper className='flex items-center justify-between' component='header'>
				<RHFSelect
					className='w-80'
					label='Местоположение'
					name='locator'
					options={reportWherePowerbankLocatorOptions}
					control={control}
				/>

				<Button className='basis-36' variant='contained' type='submit'>
					Сформировать
				</Button>
			</Paper>
		</form>
	);
};
