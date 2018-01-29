import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatPaginator, PageEvent } from "@angular/material";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Youtube } from '../../providers/youtube';
import { LocalStorage } from '../../providers/localStorage';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers: [
		Youtube
	]
})

export class HomeComponent implements OnInit, AfterViewInit {
	constructor(public youtube: Youtube, public storage: LocalStorage) {}

	pageEvent: PageEvent;
	searchForm: FormGroup;
	videos = new Array<any>();
	search;
	nextPageToken;
	prevPageToken;

    searchVideo(pageToken?): void {
		let data: Object = {
			q: this.search,
			pageToken: (pageToken) ? pageToken : null,
			maxResults: 12,
			part: 'id,snippet',
			type: 'video'
		}

		this.youtube.get('search', data).subscribe(response => {
			this.storage.put('search', this.search);
			const data = JSON.parse((response as any)._body);
			this.nextPageToken = data.nextPageToken;
			this.prevPageToken = data.prevPageToken;
			this.videos = data.items;
			document.querySelector('.search-form').classList.add('fadeInUp');
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		}, error => {
			console.log(error);
		});
	}

	ngOnInit() {
		this.searchForm = new FormGroup({
			search: new FormControl(this.storage.get('search'), Validators.required)
		});
	}

	ngAfterViewInit() {
		if(this.storage.get('search')) {
			this.search = this.storage.get('search');
			this.searchVideo();
		}
	}

}