import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoCommment } from '../../photo/photo-comment';
import { PhotoService } from '../../photo/photo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'ap-photo-comments',
    templateUrl: './photo-comments.component.html'
})
export class PhotoCommentsComponent implements OnInit {
  
    
    @Input() photoId:number;
    comments$: Observable<PhotoCommment[]>;
    commentForm: FormGroup;

    
    constructor(
        private photoService: PhotoService,
        private formBuilder: FormBuilder
    ){}

    ngOnInit(): void {
            this.comments$ = this.photoService.getComments(this.photoId);
            this.commentForm = this.formBuilder.group({
                comment : ['', Validators.maxLength(300) ]
            });
    }
}