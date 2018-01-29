import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';
import { Api } from './api'
import 'rxjs/add/operator/map';

@Injectable()
export class Youtube {
    private apiKey: string;

	constructor(public api: Api) {
        this.apiKey = 'AIzaSyAeyAM_UGpPEUWLwUkrmeCtkj8qlbYfF7s';
        this.api.setUrlBase('https://www.googleapis.com/youtube/v3');
	}

	get(endpoint: string, params: any) {
        params.key = this.apiKey;

		const headers = new Headers({
			'Content-Type': 'application/json; charset=utf-8'
		});

    	const options = new RequestOptions({
    		headers: headers
        });
        
    	const data = this.api.get(endpoint, params, options);

		data.map(res => res.json()).subscribe();

        return data;
	}

}