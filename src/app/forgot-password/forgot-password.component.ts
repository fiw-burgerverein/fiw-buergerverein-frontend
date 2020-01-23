import { Component, OnInit } from '@angular/core';
import {SignUpInfo} from '../auth/signup-info';
import {AuthService} from '../auth/auth.service';
import {ForgotPasswordInfo} from '../auth/forgot-password-info';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  form: any = {};
  forgotPasswordInfo: ForgotPasswordInfo;
  isSubmitted = false;
  isSubmitFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);

    this.forgotPasswordInfo = new ForgotPasswordInfo(
      this.form.email);

    this.authService.forgotPassword(this.forgotPasswordInfo).subscribe(
      data => {
        console.log(data);
        this.isSubmitted = true;
        this.isSubmitFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSubmitFailed = true;
      }
    );
  }

  getErrorMessage() {
    return 'Error'; // TODO
  }

}
