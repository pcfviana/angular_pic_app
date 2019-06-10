import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { AuthAutenticationGuard } from './core/auth/auth-autentication.guard';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';

const routes: Routes = 
[
    { 
        path: '', 
        pathMatch: 'full',
        redirectTo: 'home'
    },
    { 
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    { 
        path: 'photos/:userName',
        component: PhotoListComponent,
        resolve : {
            photos: PhotoListResolver
        },
        data : {
            title : 'Time line'
        }
    },
    { 
        path: 'user/:userName',
        component: PhotoListComponent,
        resolve : {
            photos: PhotoListResolver
        },
        data : {
            title : 'Time line'
        }
    },
    { 
        path: 'p/add',
         component: PhotoFormComponent, 
         canActivate: [ AuthAutenticationGuard ] ,
        data : {
            title : 'Photo Upload'
        }
    },
    { 
        path: 'p/:photoId',
         component: PhotoDetailsComponent ,
         data : {
             title : 'Photo detail'
         }
    },
    { 
        path: 'not-found', 
        component: NotFoundComponent ,
        data : {
            title : 'Not found'
        }
    },
    { 
        path: '**',
     redirectTo : 'not-found'
     }
];

@NgModule({
    imports : [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule{

}