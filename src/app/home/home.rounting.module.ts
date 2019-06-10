import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.componet';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
import { LoginGuard } from '../core/auth/loginguard';


const routes: Routes = 
[
    { 
        path: '', 
        component: HomeComponent ,
        canActivate: [ LoginGuard ],
        children: [
            { 
                path: '', 
                component: SignInComponent,
                data : {
                    title : 'Sign In'
                }
            }, 
            { 
                path: 'signup', 
                component: SignUpComponent,
                data : {
                    title : 'Sign Up'
                }
            }
        ]
    }
];

@NgModule({
    imports : [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class HomeRoutingModule {

}