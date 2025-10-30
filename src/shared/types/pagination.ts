export interface Pagination<C> {
	content: C;

	// total amount of pages
	totalElements: number;

	// amount of pages
	totalPages: number;

	// page param
	number: number;

	// expected offset param
	size: number;

	// actual offset param
	numberOfElements: number;

	// is first page
	first: boolean;

	// is last page
	last: boolean;
}
