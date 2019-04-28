import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { PlataformDetectorService } from 'src/app/core/plataform-detector/plataform-detector.service';



@Component({
    templateUrl : './signin.component.html'
})
export class SignInComponent implements OnInit  {
    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(private formBuilder: FormBuilder,
                private authService: AuthService,
                private router: Router,
                private plataformDetectorService: PlataformDetectorService){

    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login()
    {
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;
        
        this
        .authService
        .authenticate(userName, password)
        .subscribe(
            () => this.router.navigate(['photos', userName]),
            err => {
                console.log(err);
                this.loginForm.reset();

                this.plataformDetectorService.isPlatformBrowser() &&
                    this.userNameInput.nativeElement.focus();
                
                    alert('user or pwd invalid');
            } );
    }
}