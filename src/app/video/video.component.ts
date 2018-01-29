import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Youtube } from '../../providers/youtube';

@Component({
	selector: 'app-video',
	templateUrl: './video.component.html',
	styleUrls: ['./video.component.css']
})

export class VideoComponent implements OnInit {
	private videoId: string;
	private video;
	private safeURL;
	private videoURL;

	constructor(private route: ActivatedRoute, public youtube: Youtube, private sanitizer: DomSanitizer) {
		this.videoId = this.route.snapshot.params['id'];
		this.videoURL = `https://www.youtube.com/embed/${this.videoId}`;
		this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
		this.getVideoInfo();
	}

	getVideoInfo(): void {
        this.youtube.get('videos', {
			id: this.videoId,
			part: 'snippet,statistics'
        }).subscribe(response => {
			const data = JSON.parse((response as any)._body);
			this.video = data.items[0];
			console.log(data);
		}, error => {
			console.log(error);
		});
	}

	ngOnInit() {
	}

}