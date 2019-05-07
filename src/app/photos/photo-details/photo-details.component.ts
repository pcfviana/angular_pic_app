import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';
import { PhotoCommment } from '../photo/photo-comment';

@Component({
    
    templateUrl: './photo-details.component.html',
    styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {
    
    photo$: Observable<Photo>;
    comments$: Observable<PhotoCommment[]>;
    constructor(private router: ActivatedRoute,
                private photoService: PhotoService
    ){}

    ngOnInit(): void {
        const photoId = this.router.snapshot.params.photoId;
         this.photo$ = this.photoService.findById(photoId);
         this.comments$ = this.photoService.getComments(photoId);
    }

}