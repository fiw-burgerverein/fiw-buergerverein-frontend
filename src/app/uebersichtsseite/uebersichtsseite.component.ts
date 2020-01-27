
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-uebersichtsseite',
  templateUrl: './uebersichtsseite.component.html',
  styleUrls: ['./uebersichtsseite.component.css']
})
export class UebersichtsseiteComponent implements OnInit {
application;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/user/2').subscribe(data => {
      console.log(data);
      this.application=data;
    })

  }

}
