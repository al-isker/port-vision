import { useParams } from 'next/navigation';

// this hook should only be used on dynamic routes with id
// that's why it doesn't have a null check

export const useIdParam = () => {
	const { id } = useParams();

	return Number(id);
};
