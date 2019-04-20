import { Component } from '@angular/core';

@Component({
  selector: 'ap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  photos = 
  [
    {
      url: 'https://hlj.com/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/t/a/tam60782_6.png',
      description: 'f-14-1'
    },
    { 
      url: 'https://2.bp.blogspot.com/-6Tq6pLwz7bc/V3EeCOrjPkI/AAAAAAAB2i0/YP96B7Q_cgs4WTMUf1MPSuWrujDG7n1BwCLcB/s1600/Finemolds%2BF-14%2B72%2Bscale%2B%2B-%2Bimage148.jpg',
      description: 'f-14'
    }
  ];
}
