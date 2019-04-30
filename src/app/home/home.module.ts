import { NgModule } from "@angular/core";
import { SignInComponent } from "./signin/signin.component";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './signup/signup.component';

@NgModule({
    declarations: [ 
        SignInComponent,
        SignUpComponent
     ],
    imports: [ 
        CommonModule,
        FormsModule,
         ReactiveFormsModule,
         VMessageModule,
         RouterModule
    ]
})
export class HomeModule{}