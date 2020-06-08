import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
	providedIn: 'root'
})
export class ApiService {

	apiUrl = 'http://localhost:3000/containers';

	constructor(public http: HttpClient) { }

	getRows() {
		
		let url = this.apiUrl;

		return this.http.get(url);
	}
}
