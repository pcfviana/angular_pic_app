import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Photo } from './photo';
import { PhotoCommment } from './photo-comment';

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

    upload(description: string, allowComments: boolean, file: File){
        const formData = new FormData();
        formData.append('description', description);
        formData.append('allowComments', allowComments ? 'true' : 'false');
        formData.append('imageFile', file);

        return this.http.post(API + 'photos/upload', formData);
    }

    findById(photoId:number) {
        return this.http.get<Photo>(API + 'photos/' + photoId);
    }
    
    getComments(photoId:number){
        return this.http.get<PhotoCommment[]>(API + 'photos/' + photoId + '/comments');
    }

    addComment(photoId: number, commentText:string){
        return this.http.post(
            API + 'photos/' + photoId + '/comments',
            { commentText: commentText });
    }

    removePhoto(photoId:number) {
        return this.http.delete(API + 'photos/' + photoId);
    }
}