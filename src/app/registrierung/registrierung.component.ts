import { Component, OnInit } from '@angular/core';
import {SignUpInfo} from '../auth/signup-info';
import {AuthService} from '../auth/auth.service';
import {ConfirmAccountInfo} from '../auth/confirm-account-info';
import {ActivatedRoute, Router} from '@angular/router';

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
  // confirm account
  verificationToken: string;
  accountInfo: ConfirmAccountInfo;
  isActivated = false;
  activationFailed = false;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

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

  getErrorMessage() {
    return 'Error'; // TODO
  }
}
