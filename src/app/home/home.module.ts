import { NgModule } from "@angular/core";
import { SignInComponent } from "./signin/signin.component";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './signup/signup.component';
import { HomeComponent } from './home.componet';
import { HomeRoutingModule } from './home.rounting.module';
import { SignUpService } from './signup/signup.service';

@NgModule({
    declarations: [ 
        SignInComponent,
        SignUpComponent,
        HomeComponent
     ],
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule,
        HomeRoutingModule
    ],
    providers: [ SignUpService ]
})
export class HomeModule{}