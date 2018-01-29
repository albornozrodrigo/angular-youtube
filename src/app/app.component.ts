import { Component } from '@angular/core';
import { LocalStorage } from '../providers/localStorage';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	public title: string;
	
	constructor(public storage: LocalStorage) {
		this.title = 'Search Videos';
		this.storage.remove('search');
	}
}