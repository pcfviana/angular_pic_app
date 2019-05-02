import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case-validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { Router } from '@angular/router';
import { PlataformDetectorService } from 'src/app/core/plataform-detector/plataform-detector.service';

@Component({
    templateUrl: './signup.component.html',
    providers: [ UserNotTakenValidatorService ]
})
export class SignUpComponent implements OnInit {
   
 
    signupForm: FormGroup;
    @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

    constructor(private formBuilder: FormBuilder,
                private userNotTakenValidatorService: UserNotTakenValidatorService,
                private signUpService: SignUpService,
                private router: Router,
                private plataformDetectorService: PlataformDetectorService){}

     ngOnInit(): void {        
        this.signupForm = this.formBuilder.group({
            email: ['', 
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            userName: ['', 
                [
                    Validators.required,
                    //Validators.pattern('^[a-z][a-z0-9_]+[a-z0-9]$'),
                    lowerCaseValidator,                    
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ],
                this.userNotTakenValidatorService.checkUserNameTaken()
            ],
            fullName: ['', 
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ]
            ],
            password: ['', 
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(14)
                ]
            ]

        });

        this.plataformDetectorService.isPlatformBrowser() &&
                    this.emailInput.nativeElement.focus();
    }

    
    signup(){
        const newUser = this.signupForm.getRawValue() as NewUser;
        this
            .signUpService
            .signup(newUser)
            .subscribe(
                        () => this.router.navigate(['']),
                        err => console.log(err)
                    );
    }
}