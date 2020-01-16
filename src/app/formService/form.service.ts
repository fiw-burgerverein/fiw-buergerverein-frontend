import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { FormInfo } from './form-info';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class FormService {

  private formUrl = 'http://localhost:8080/user/1/formular';
  // fuer userId-Auslesen: http://localhost:8080/user/:userId/formular

  constructor(private http: HttpClient) { }

  saveForm(info: FormInfo): Observable<string> {
    return this.http.post<string>(this.formUrl, info, httpOptions);
  }
}
