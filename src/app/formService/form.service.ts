import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { FormInfo } from './form-info';

const httpOptions: { headers; observe } = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  }),
  observe: 'response' as 'body',
  // responseType: 'json'
};
// httpOptions.headers.append('Authorization', 'Bearer')
@Injectable({
  providedIn: 'root'
})
export class FormService {

  private formUrl = 'http://localhost:8080/user/formular';
  // fuer userId-Auslesen: http://localhost:8080/user/:userId/formular
  private changeStateUrl = 'http://localhost:8080/alleAntraege/8';
/*  private changeStateUrl = 'http://localhost:8080/alleAntraege/:formId';*/

  constructor(private http: HttpClient) { }

  saveForm(info: FormInfo): Observable<any> {
    return this.http.post<any>(this.formUrl, info, httpOptions);
  }

  changeState(stateInt: number): Observable<any> {
    return this.http.post<any>(this.changeStateUrl, stateInt, httpOptions);
  }
}
