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

  private formUrl = 'http://localhost:8080/user/1/formular';
  // fuer userId-Auslesen: http://localhost:8080/user/:userId/formular

  constructor(private http: HttpClient) { }

  saveForm(info: FormInfo): Observable<any> {
    return this.http.post<any>(this.formUrl, info, httpOptions);
  }
}
