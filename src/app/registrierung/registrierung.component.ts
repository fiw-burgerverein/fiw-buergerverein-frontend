import { Component, OnInit } from '@angular/core';
import {SignUpInfo} from '../auth/signup-info';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './registrierung.component.html',
  styleUrls: ['./registrierung.component.css']
})
export class RegistrierungComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  hide: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignUpInfo(
      this.form.email,
      this.form.emailConfirm,
      this.form.password,
      this.form.passwordConfirm);

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

  getErrorMessage() {
    return 'Error'; // TODO
  }
}
