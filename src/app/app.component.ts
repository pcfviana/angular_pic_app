import { Component } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';



@Component({
  selector: 'ap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  photos: Object[] = [];

  constructor(http: HttpClient){
    http
        .get<Object[]>('http://localhost:3000/photos')
        .subscribe(
            photos => this.photos = photos,
            err => console.log(err.message)
          );
  }
}
