import { Component } from '@angular/core';

import { PhotoService } from './photos/photo/photo.service';


@Component({
  selector: 'ap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  photos: Object[] = [];

  constructor(photoService: PhotoService){
    photoService.listFromUser('viana').subscribe(photos => this.photos = photos);
  }
}
