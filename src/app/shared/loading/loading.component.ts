import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    template : 'ap-loading',
    templateUrl: './loading.component.html',
    styleUrls : ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
   
    loading$: Observable<string>;

    constructor(private ladingService: LoadingService) {

    }

    ngOnInit(): void {
        this.loading$ = this.ladingService
        .getLoading()
        .pipe(map(loadingType => loadingType.valueOf()));
    }
}