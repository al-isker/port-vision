type Id = string | number;
type Uuid = string;

class Routes {
	// clients = () => '/clients';
	// clientsPagination = () => `${this.clients()}?${this.pagination}`;
	// clientById = (id: Id) => `${this.clients()}/${id}`;
	// clientCreate = () => `${this.clients()}/form`;
	// clientUpdate = (id: Id) => `${this.clients()}/form/${id}`;

	port = () => '/port';
	portById = (id: Id) => `${this.port()}/${id}`;
}

export const ROUTES = new Routes();
