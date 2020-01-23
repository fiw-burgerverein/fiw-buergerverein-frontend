
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-uebersichtsseite',
  templateUrl: './uebersichtsseite.component.html',
  styleUrls: ['./uebersichtsseite.component.css']
})
export class UebersichtsseiteComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://localhost:8080/user/{formId}').subscribe(data => {
      console.log();
    })

  }

}
