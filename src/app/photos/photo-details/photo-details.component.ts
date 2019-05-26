import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';

@Component({
    
    templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {
    
    photo$: Observable<Photo>;
    photoId: number;

    constructor(private router: ActivatedRoute,
                private photoService: PhotoService
    ){}

    ngOnInit(): void {
        this.photoId = this.router.snapshot.params.photoId;
        this.photo$ = this.photoService.findById(this.photoId);
    }

}