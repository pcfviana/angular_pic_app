import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Photo } from './photo';

const API = 'http://localhost:3000/';

@Injectable({ providedIn: 'root' })
export class PhotoService {
    constructor(private http: HttpClient){
    }

    listFromUser(userName: string)
    {
        var url = API + userName + '/photos';
        return this.http.get<Photo[]>(url);
    }

    listFromUserPaginated(userName: string, page:number)
    {
        const params = new HttpParams().append('page', page.toString());
        var url = API + userName + '/photos';
        
        return this.http.get<Photo[]>(url , { params });
    }
}