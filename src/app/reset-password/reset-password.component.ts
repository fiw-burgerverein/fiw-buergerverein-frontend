import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {ResetPasswordInfo} from '../auth/reset-password-info';
import {ActivatedRoute, Router} from '@angular/router';
import {CheckTokenInfo} from '../auth/check-token-info';
import {ForgotPasswordInfo} from '../auth/forgot-password-info';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  form: any = {};
  resetToken: string;
  checkTokenInfo: CheckTokenInfo;
  resetPasswordInfo: ResetPasswordInfo;
  isTokenOk = false;
  isTokenNotOk = false;
  isReset = false;
  isResetFailed = false;
  errorMessage = '';
  // forgot password
  // forgotPasswordInfo: ForgotPasswordInfo;
  // isSubmitted = false;
  // isSubmitFailed = false;

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    console.log(this.router.url);
    this.route.queryParams.subscribe(params => {
      this.resetToken = params.token;

    });
    console.log(this.resetToken);

    this.checkTokenInfo = new CheckTokenInfo(this.resetToken);
    this.authService.checkToken(this.checkTokenInfo).subscribe(
      data => {
        console.log(data);
        this.isTokenOk = true;
        this.isTokenNotOk = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isTokenNotOk = true;
      }
    );
    // if (this.router.url.startsWith('/passwort-vergessen/passwort-zuruecksetzen')) {}
  }

  onSubmit() {
    console.log(this.form);

    this.resetPasswordInfo = new ResetPasswordInfo(
      this.form.password,
      this.form.passwordConfirm);

    this.authService.resetPassword(this.resetPasswordInfo, this.resetToken).subscribe(
      data => {
        console.log(data);
        this.isReset = true;
        this.isResetFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isResetFailed = true;
      }
    );
  }
  // onSubmitForgot() {
  //   console.log(this.form);
  //
  //   this.forgotPasswordInfo = new ForgotPasswordInfo(
  //     this.form.email);
  //
  //   this.authService.forgotPassword(this.forgotPasswordInfo).subscribe(
  //     data => {
  //       console.log(data);
  //       this.isSubmitted = true;
  //       this.isSubmitFailed = false;
  //     },
  //     error => {
  //       console.log(error);
  //       this.errorMessage = error.error.message;
  //       this.isSubmitFailed = true;
  //     }
  //   );
  // }

  getErrorMessage() {
    return 'Error'; // TODO
  }

}
