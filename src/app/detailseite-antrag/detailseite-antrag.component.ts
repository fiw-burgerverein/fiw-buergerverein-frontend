import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {Application} from "../models/application.model";


@Component({
  selector: 'app-detailseite-antrag',
  templateUrl: './detailseite-antrag.component.html',
  styleUrls: ['./detailseite-antrag.component.css']
})
export class DetailseiteAntragComponent implements OnInit {
  application: Application;


  constructor(private apiService: ApiService) { }

  public getApplication(id: number) {
    this.apiService.getApplication(id)
      .subscribe((data) => {
        console.log(data);
        this.application = data;
      }         );
  }

  ngOnInit() {
    this.getApplication(3);
  }

}
