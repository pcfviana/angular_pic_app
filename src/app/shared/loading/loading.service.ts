import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingType } from './loading-type';
import { startWith } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class LoadingSercice {

    loadingSubject = new Subject<LoadingType>();

    getLoading(){
        return this.loadingSubject
            .asObservable()
            .pipe(startWith(LoadingType.STOPED));
    }

    start(){
        this.loadingSubject.next(LoadingType.LOADING);
    }
    
    stop(){
        this.loadingSubject.next(LoadingType.STOPED);
    }


}