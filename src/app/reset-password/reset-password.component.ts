import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {ResetPasswordInfo} from '../auth/reset-password-info';
import {ActivatedRoute} from '@angular/router';
import {CheckTokenInfo} from '../auth/check-token-info';

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

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
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

  getErrorMessage() {
    return 'Error'; // TODO
  }

}
