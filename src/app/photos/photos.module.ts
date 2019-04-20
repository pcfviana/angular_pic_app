import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';


@NgModule({
    declarations: [ 
        PhotoComponent,
         PhotoListComponent 
        ], //privado
    //exports: [ PhotoComponent ], // público
    imports: [ 
        HttpClientModule,
        CommonModule
     ]
})
export class PhotosModule{

}