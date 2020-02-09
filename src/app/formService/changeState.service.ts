/*
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class ChangeStateService {

  private changeStateUrl = 'http://localhost:8080/alleAntraege/8';
  /!*  um formId auszulesen: http://localhost:8080/alleAntraege/:formId*!/

  constructor(private http: HttpClient) { }

  changeState(stateInt: number): Observable<any> {
    return this.http.post<any>(this.changeStateUrl, stateInt, httpOptions);
  }
}
*/
