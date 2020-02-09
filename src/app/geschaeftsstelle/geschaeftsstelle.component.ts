import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Geschaeftsstelle } from '../models/geschaeftsstelle.model';
import { Application} from '../models/application.model';
import {AllApplications} from '../models/allapplications.model';

@Component({
  selector: 'app-geschaeftsstelle',
  templateUrl: './geschaeftsstelle.component.html',
  styleUrls: ['./geschaeftsstelle.component.css']
})

export class GeschaeftsstelleComponent implements OnInit {

  geschaeftsstelle: AllApplications;

  constructor(private apiService: ApiService) { }

  public getApplicationsList() {
    this.apiService.getAllApplications()
      .subscribe((data) => {
        // console.log(data);
        this.geschaeftsstelle = data;
        // console.log(this.geschaeftsstelle);
      }         );
  }

  ngOnInit() {
    this.getApplicationsList();
  }
}

/*application: Application;
state: number;
//public stati = [0, 1, 2];
  isInBearbeitung = false;
  isGehnemigt = false;
  isAbgelehnt = false;*/

/*this.state = this.geschaeftsstelle.body.status;
switch (this.state) {
  case (this.state = 0): {this.isInBearbeitung = true; break;}
  case (this.state = 1): {this.isGehnemigt = true; break;}
  case (this.state = 2): {this.isAbgelehnt = true; break;}
}*/
/*  public getApplication (id: number){
    this.apiService.getApplication(id)
      .subscribe((data) => {
        console.log(data);
        this.geschaeftsstelle = data;

      }         );
  }*/
