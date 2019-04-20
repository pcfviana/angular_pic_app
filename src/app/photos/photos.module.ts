import { NgModule } from '@angular/core';

import { PhotoComponent } from './photo/photo.component';

@NgModule({
    declarations: [ PhotoComponent ], //privado
    exports: [ PhotoComponent ] // público
})
export class PhotosModule{

}