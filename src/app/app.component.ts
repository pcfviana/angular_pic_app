import { Component, OnInit } from '@angular/core';

import { PhotoService } from './photos/photo/photo.service';
import { Photo } from './photos/photo/photo';


@Component({
  selector: 'ap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  photos: Photo[] = [];

  constructor(private photoService: PhotoService){
    
  }

  ngOnInit(): void{
    this.photoService.listFromUser('viana').subscribe(photos => this.photos = photos);
  }
}
