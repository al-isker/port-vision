export interface IPort {
	port: {
		id: number;
		name: string;
		description: string;
		rating: number;
		shipsInServe: number;
		shipsThroughput: number;
		waterPollution: number;
		airPollution: number;
		incidentCount: number;
		latitude: number;
		longitude: number;
		imageUrl: string;
	};
	comments: Array<{
		id: number;
		author: string;
		text: string;
		stars: number;
		OffsetDateTime: string;
	}>;
}
