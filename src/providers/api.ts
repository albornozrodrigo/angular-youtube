import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
	private url: string;

    constructor(public http: Http) {}
    
    setUrlBase(url: string) {
        this.url = url;
    }

	get(endpoint: string, params?: any, options?: RequestOptions) {
		if(!options) {
			options = new RequestOptions();
		}

		if(params) {
			let p = new URLSearchParams();
			for(let k in params) {
				p.set(k, params[k]);
			}

			options.search = !options.search && p || options.search;
		}

		return this.http.get(`${this.url}/${endpoint}/`, options);
	}

	post(endpoint: string, params: any, options?: RequestOptions) {
		return this.http.post(`${this.url}/${endpoint}/`, params, options);
	}

	put(endpoint: string, params: any, options?: RequestOptions) {
		return this.http.put(`${this.url}/${endpoint}/`, params, options);
	}

	delete(endpoint: string, params: any, options?: RequestOptions) {
		return this.http.post(`${this.url}/${endpoint}/`, params, options);
	}

	patch(endpoint: string, params: any, options?: RequestOptions) {
		return this.http.put(`${this.url}/${endpoint}/`, params, options);
	}
}