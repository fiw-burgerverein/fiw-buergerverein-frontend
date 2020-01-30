import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Application} from './models/application.model';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {AllApplications} from './models/allapplications.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private backendUrl = 'http://localhost:8080/user';

  constructor(
    private httpClient: HttpClient) { }

  public getApplication(id: number): Observable<Application>  {
    const url = this.backendUrl + '/' + id;
    return this.httpClient
      .get<Application>(url, {responseType: 'json'})
      .pipe(
        map(data => new Application(data),
          catchError(() => throwError('Antrag nicht gefunden id=' + id))));
  }

  public getAllApplications(): Observable<AllApplications>  {
    const url = 'http://localhost:8080/alleAntraege/';
    return this.httpClient
      .get<AllApplications>(url, {responseType: 'json'})
      .pipe(
        map(data => new AllApplications(data),
          catchError(() => throwError('keine Anträge verfügbar'))));
  }
}
