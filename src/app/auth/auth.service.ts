import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {JwtResponse} from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
import {ConfirmAccountInfo} from './confirm-account-info';
import {ResetPasswordInfo} from './reset-password-info';
import {ForgotPasswordInfo} from './forgot-password-info';
import {CheckTokenInfo} from './check-token-info';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  observe: 'response' as 'body'
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private loginUrl = 'http://localhost:8080/api/auth/signin';
  // private signupUrl = 'http://localhost:8080/api/auth/signup';
  private signupUrl = 'http://localhost:8080/registrieren';
  private loginUrl = 'http://localhost:8080/login';
  private confirmUrl = 'http://localhost:8080/accountbestaetigung/?token=';
  private resetUrl = 'http://localhost:8080/login/reset-password';
  private forgotUrl = 'http://localhost:8080/login/forgot-password';


  constructor(private http: HttpClient) { }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }

  confirmAccount(info: ConfirmAccountInfo): Observable<string> {
    return this.http.get<string>(this.confirmUrl + info.verificationToken, httpOptions);
  }

  forgotPassword(info: ForgotPasswordInfo): Observable<string> {
    return this.http.post<string>(this.forgotUrl, info, httpOptions);
  }

  checkToken(info: CheckTokenInfo): Observable<string> {
    return this.http.get<string>(this.resetUrl + '/?token=' + info.resetToken, httpOptions);
  }

  resetPassword(info: ResetPasswordInfo, resetToken: string): Observable<string> {
    return this.http.post<string>(this.resetUrl + '/ok/?token=' + resetToken, info, httpOptions);
  }

}


