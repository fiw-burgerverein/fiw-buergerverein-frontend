import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {SignUpInfo} from '../auth/signup-info';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-registrierung',
  templateUrl: './registrierung.component.html',
  styleUrls: ['./registrierung.component.css']
})
export class RegistrierungComponent implements OnInit {


  constructor(private authService: AuthService) { }

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  getErrorMessage() {
    return this.email.hasError('required') ? 'Geben Sie eine gültige E-Mail ein' :
      this.email.hasError('email') ? 'Ungültiges Format' : '';
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignUpInfo(
      this.form.email,
      this.form.password);

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }


}
