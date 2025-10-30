import { Paper } from '@/ui/Paper';
import { Typography } from '@/ui/Typography';

interface Props {
	bankAccountName: string;
}

export const BankAccountByIdViewHeader = ({ bankAccountName }: Props) => {
	return (
		<Paper className='flex items-center justify-between' component='header'>
			<Typography variant='h2'>{bankAccountName}</Typography>
		</Paper>
	);
};
