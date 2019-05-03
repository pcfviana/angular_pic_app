import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoFormComponent } from './photo-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VMessageModule } from 'src/app/shared/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { PhotoModule } from '../photo/photo.module';
import { ImediateClickDirectiveModule } from 'src/app/shared/directives/imediate-click/imediate-click.module';


@NgModule({
    declarations: [ PhotoFormComponent ],
    imports : [
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        FormsModule,
        RouterModule,
        PhotoModule,
        ImediateClickDirectiveModule
    ]
})

export class PhotoFormModule
{

}