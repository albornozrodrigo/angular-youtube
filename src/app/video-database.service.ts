import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class VideoDatabaseService implements InMemoryDbService {

	constructor() {}

	createDb() {
		let bikes = [
			{ id: 1, name: 'CBR250R' },
			{ id: 2, name: 'CBR150R' },
			{ id: 3, name: 'Ninja250R' },
			{ id: 4, name: 'CBR1000R' },
			{ id: 5, name: 'Ninja1000RR' }
		];

		return { bikes };
	}

}