'use client';

import { TableRow as MUITableRow, styled } from '@mui/material';

export const TableRow = styled(MUITableRow)(({ hover }) => ({
	cursor: hover ? 'pointer' : undefined,

	'&:last-child td': {
		border: 0
	}
}));
