class PortService {
	private endpoint = 'port';

	async getAll() {
		// return api.get<IPort[]>(this.endpoint).then(d => d.data);

		return [
			{
				port: {
					id: 1,
					name: 'Порт Каспийск',
					description: 'Порт каспийскийск там тут в гораде',
					rating: 5,
					shipsInServe: 42,
					shipsThroughput: 50,
					waterPollution: [12, 15, 30],
					airPollution: [10, 12, 20],
					incidentCount: 1,
					latitude: 42.886924,
					longitude: 47.663778,
					imageUrl:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DsqWkxxg_hI9MsuM-a0ehaZX9nR2UtIX6A&s'
				},
				comments: [
					{
						id: 1,
						author: 'Алискер Бабаев',
						text: 'Порт бомба чесно говоря',
						stars: 5,
						createdAt: '2025-10-30T16:00:39.580942Z',
						portId: 1
					},
					{
						id: 2,
						author: 'Гасан Омаров',
						text: 'Стреляют, спать не дают',
						stars: 4,
						createdAt: '2025-10-30T16:00:39.580942Z',
						portId: 1
					},
					{
						id: 3,
						author: 'Алискер бабаев',
						text: 'Порт бомба чесно говоря',
						stars: 4,
						createdAt: '2025-10-30T16:00:39.580942Z',
						portId: 1
					},
					{
						id: 4,
						author: 'Кахриман Кахриманов',
						text: 'Раз в год и палка стреляет',
						stars: 4,
						createdAt: '2025-10-30T16:00:39.580942Z',
						portId: 1
					},
					{
						id: 5,
						author: 'Абдулла Магомедов',
						text: 'Знания это сила',
						stars: 3,
						createdAt: '2025-10-30T16:00:39.580942Z',
						portId: 1
					}
				],
				files: null
			},
			{
				port: {
					id: 3,
					name: 'Порт Актау',
					description: 'Порт Актау там тут в гораде',
					rating: 7,
					shipsInServe: 34,
					shipsThroughput: 32,
					waterPollution: [12, 15, 30],
					airPollution: [10, 12, 20],
					incidentCount: 0,
					latitude: 43.6017835,
					longitude: 51.218085,
					imageUrl:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DsqWkxxg_hI9MsuM-a0ehaZX9nR2UtIX6A&s'
				},
				comments: [
					{
						id: 53,
						author: 'Абдоб',
						text: 'abdob',
						stars: 5,
						createdAt: '2025-10-30T21:25:42.933653Z',
						portId: 3
					}
				],
				files: [
					{
						id: 54,
						author: 'Абдоб',
						text: 'https://example.com',
						stars: -1,
						createdAt: '2025-10-30T21:26:31.673627Z',
						portId: 3
					}
				]
			},
			{
				port: {
					id: 2,
					name: 'Порт Махачкала',
					description: 'Порт махачкала там тут в гораде',
					rating: 6,
					shipsInServe: 34,
					shipsThroughput: 32,
					waterPollution: [12, 15, 30],
					airPollution: [10, 12, 20],
					incidentCount: 0,
					latitude: 42.989767,
					longitude: 47.50611,
					imageUrl:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DsqWkxxg_hI9MsuM-a0ehaZX9nR2UtIX6A&s'
				},
				comments: null,
				files: null
			},
			{
				port: {
					id: 4,
					name: 'Порт Астрахань',
					description: 'Порт Астрахань там тут в гораде',
					rating: 6,
					shipsInServe: 34,
					shipsThroughput: 32,
					waterPollution: [12, 15, 30],
					airPollution: [10, 12, 20],
					incidentCount: 0,
					latitude: 46.3486597,
					longitude: 47.9971001,
					imageUrl:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DsqWkxxg_hI9MsuM-a0ehaZX9nR2UtIX6A&s'
				},
				comments: null,
				files: null
			},
			{
				port: {
					id: 5,
					name: 'Порт Карабогаз',
					description: 'Порт Карабогаз там тут в гораде',
					rating: 4,
					shipsInServe: 32,
					shipsThroughput: 45,
					waterPollution: [12, 15, 30],
					airPollution: [10, 12, 20],
					incidentCount: 2,
					latitude: 41.5436087,
					longitude: 52.5538757,
					imageUrl:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DsqWkxxg_hI9MsuM-a0ehaZX9nR2UtIX6A&s'
				},
				comments: null,
				files: null
			},
			{
				port: {
					id: 6,
					name: 'Порт Туркменбаши',
					description: 'Порт Туркменбаши там тут в гораде',
					rating: 4,
					shipsInServe: 32,
					shipsThroughput: 45,
					waterPollution: [12, 15, 30],
					airPollution: [10, 12, 20],
					incidentCount: 2,
					latitude: 40.0055571,
					longitude: 53.02131,
					imageUrl:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DsqWkxxg_hI9MsuM-a0ehaZX9nR2UtIX6A&s'
				},
				comments: null,
				files: null
			},
			{
				port: {
					id: 7,
					name: 'Порт Ерсай',
					description: 'Порт Ерсай там тут в гораде',
					rating: 7,
					shipsInServe: 32,
					shipsThroughput: 45,
					waterPollution: [12, 15, 30],
					airPollution: [10, 12, 20],
					incidentCount: 2,
					latitude: 43.1848102,
					longitude: 51.5417723,
					imageUrl:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DsqWkxxg_hI9MsuM-a0ehaZX9nR2UtIX6A&s'
				},
				comments: null,
				files: null
			},
			{
				port: {
					id: 8,
					name: 'Порт Ада',
					description: 'Порт Ада там тут в гораде',
					rating: 3,
					shipsInServe: 89,
					shipsThroughput: 45,
					waterPollution: [12, 15, 30],
					airPollution: [10, 12, 20],
					incidentCount: 2,
					latitude: 36.5597074,
					longitude: 31.9425163,
					imageUrl:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DsqWkxxg_hI9MsuM-a0ehaZX9nR2UtIX6A&s'
				},
				comments: null,
				files: null
			},
			{
				port: {
					id: 9,
					name: 'Порт Хазар',
					description: 'Порт Хазар там тут в гораде',
					rating: 8,
					shipsInServe: 34,
					shipsThroughput: 45,
					waterPollution: [12, 15, 30],
					airPollution: [10, 12, 20],
					incidentCount: 2,
					latitude: 39.4158343,
					longitude: 53.101326,
					imageUrl:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DsqWkxxg_hI9MsuM-a0ehaZX9nR2UtIX6A&s'
				},
				comments: null,
				files: null
			},
			{
				port: {
					id: 10,
					name: 'Порт Экерем',
					description: 'Порт Экерем там тут в гораде',
					rating: 3,
					shipsInServe: 123,
					shipsThroughput: 45,
					waterPollution: [12, 15, 30],
					airPollution: [10, 12, 20],
					incidentCount: 2,
					latitude: 40.0055571,
					longitude: 53.02131,
					imageUrl:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DsqWkxxg_hI9MsuM-a0ehaZX9nR2UtIX6A&s'
				},
				comments: null,
				files: null
			}
		];
	}

	async getById(id: number) {
		// return api.get<IPort>(`${this.endpoint}/${id}`).then(d => d.data);

		return {
			port: {
				id: 3,
				name: 'Порт Актау',
				description: 'Порт Актау там тут в гораде',
				rating: 7.0,
				shipsInServe: 34.0,
				shipsThroughput: 32.0,
				waterPollution: [12.0, 15.0, 30.0],
				airPollution: [10.0, 12.0, 20.0],
				incidentCount: 0,
				latitude: 43.6017835,
				longitude: 51.218085,
				imageUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DsqWkxxg_hI9MsuM-a0ehaZX9nR2UtIX6A&s'
			},
			comments: [
				{
					id: 53,
					author: 'Абдоб',
					text: 'abdob',
					stars: 5,
					createdAt: '2025-10-30T21:25:42.933653Z',
					portId: 3
				}
			],
			files: [
				{
					id: 54,
					author: 'Абдоб',
					text: 'https://example.com',
					stars: -1,
					createdAt: '2025-10-30T21:26:31.673627Z',
					portId: 3
				}
			]
		};
	}
}

export const portService = new PortService();
