import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';

@Component({
    
    templateUrl: './photo-details.component.html',
    styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {
    
    photo$: Observable<Photo>;
    constructor(private router: ActivatedRoute,
                private photoService: PhotoService
    ){}

    ngOnInit(): void {
         this.photo$ = this.photoService.findById(this.router.snapshot.params.photoId);
    }

}