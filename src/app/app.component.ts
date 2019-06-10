import { Component, OnInit } from '@angular/core';

import { PhotoService } from './photos/photo/photo.service';
import { Photo } from './photos/photo/photo';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter,map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'ap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  constructor(
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private titleService: Title){

  }

  ngOnInit(): void {
      this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(map( route => {
          while(route.firstChild) route = route.firstChild;
          return route;
      } ))
      .pipe(switchMap(route => route.data))
      .subscribe(event => this.titleService.setTitle(event.title))
  }
  
}
