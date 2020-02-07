import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthLoginInfo} from '../auth/login-info';
import {AuthService} from '../auth/auth.service';
import {TokenStorageService} from '../auth/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);

  getErrorEmail() {
    return this.emailFormControl.hasError('required') ? 'Sie müssen dieses Feld ausfüllen.' :
      this.emailFormControl.hasError('email') ? 'Bitte tragen Sie ein gültiges E-Mail ein.' :
        '';
  }
  getErrorPassword() {
    return this.passwordFormControl.hasError('required') ? 'Sie müssen dieses Feld ausfüllen.' :
        '';
  }

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,  private router: Router) { }

  ngOnInit() {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();  /* gibt ROLE_ROLE_USER zurück*/
    }
  }

  onSubmit() {
    console.log(this.form);

    this.loginInfo = new AuthLoginInfo(
      this.form.email,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveEmail(data.email);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.reloadPage();
        this.router.navigate(['#']);
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
  getErrorMessage() {
    return this.errorMessage; // TODO
  }

  /*logout() {
    this.token.signOut();
    window.location.reload();
  }*/

}
