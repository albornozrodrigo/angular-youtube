import { Component } from '@angular/core';
import { Video } from './video/video';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

const VIDEOS: Video[] = [
	{ id: 1, name: 'CBR250R' },
	{ id: 2, name: 'CBR150R' },
	{ id: 3, name: 'Ninja250R' },
	{ id: 4, name: 'CBR1000R' },
	{ id: 5, name: 'Ninja1000RR' }
];

export class AppComponent {
	title = 'Search Videos';
    videos = VIDEOS;
    selectedVideo: Video;
    onSelect(video: Video): void {   
        this.selectedVideo = video;
    }
}