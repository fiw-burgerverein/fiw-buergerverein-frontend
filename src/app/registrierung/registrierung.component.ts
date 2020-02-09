import { Component, OnInit } from '@angular/core';
import {SignUpInfo} from '../auth/signup-info';
import {AuthService} from '../auth/auth.service';
import {ConfirmAccountInfo} from '../auth/confirm-account-info';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroupDirective, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './registrierung.component.html',
  styleUrls: ['./registrierung.component.css']
})
export class RegistrierungComponent implements OnInit {

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) { }
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  hide: boolean;
  // confirm account
  verificationToken: string;
  accountInfo: ConfirmAccountInfo;
  isActivated = false;
  activationFailed = false;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  emailConfirmFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  passwordConfirmFormControl = new FormControl('', [Validators.required]);

  getErrorEmail() {
    return this.emailFormControl.hasError('required') ? 'Sie müssen dieses Feld ausfüllen.' :
      this.emailFormControl.hasError('email') ? 'Bitte tragen Sie ein gültiges E-Mail ein.' :
        '';
  }
  getErrorPassword() {
    return this.passwordFormControl.hasError('required') ? 'Sie müssen dieses Feld ausfüllen.' :
      '';
  }

  ngOnInit() {
    // console.log(this.router.url)
    if (this.router.url.startsWith('/registrieren/accountbestaetigung')) {
      this.route.queryParams.subscribe(params => {
        this.verificationToken = params.token;

      });
      // console.log(this.verificationToken);

      this.accountInfo = new ConfirmAccountInfo(this.verificationToken);
      this.authService.confirmAccount(this.accountInfo).subscribe(
        data => {
          console.log(data);
          this.isActivated = true;
          this.activationFailed = false;
          this.router.navigate(['/login']);
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.activationFailed = true;
          this.router.navigate(['/registrieren']);
        }
      );
    }
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

  onInput(value) {
    if (this.form.hasError('confirmedDoesNotMatch')) { // or some other test of the value
      this.form.get('passwordConfirm').setErrors([{confirmedDoesNotMatch: true}]);
    } else {
      this.form.get('passwordConfirm').setErrors(null);
    }
  }

  getErrorMessage() {
    return this.errorMessage; // TODO
  }
}
