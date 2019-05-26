import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/shared/alert/alert.service';

@Component({
    
    templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {
    
    photo$: Observable<Photo>;
    photoId: number;

    constructor(private route: ActivatedRoute,
                private photoService: PhotoService,
                private router: Router,
                private alertService: AlertService
    ){}

    ngOnInit(): void {
        this.photoId = this.route.snapshot.params.photoId;
        this.photo$ = this.photoService.findById(this.photoId);
    }

    remove()
    {
        this.photoService
                        .removePhoto(this.photoId)
                        .subscribe(() => { 
                            this.alertService.success('photo removed!');
                            this.router.navigate(['']) 
                        }, error => {
                            this.alertService.warning('photo not removed');
                        });
    }

}