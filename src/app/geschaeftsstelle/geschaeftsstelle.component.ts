import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Geschaeftsstelle } from '../models/geschaeftsstelle.model';
import { Application} from '../models/application.model';

@Component({
  selector: 'app-geschaeftsstelle',
  templateUrl: './geschaeftsstelle.component.html',
  styleUrls: ['./geschaeftsstelle.component.css']
})

export class GeschaeftsstelleComponent implements OnInit {
geschaeftsstelle: Geschaeftsstelle;
/*application: Application;
state: number;
//public stati = [0, 1, 2];
  isInBearbeitung = false;
  isGehnemigt = false;
  isAbgelehnt = false;*/

  constructor(private apiService: ApiService) { }

  public getApplicationsList() {
    this.apiService.getAllApplications()
      .subscribe((data) => {
        console.log('getApplicationsList d ' + data);
        console.log(data);
        this.geschaeftsstelle = data;
        /*this.state = this.geschaeftsstelle.body.status;
        switch (this.state) {
          case (this.state = 0): {this.isInBearbeitung = true; break;}
          case (this.state = 1): {this.isGehnemigt = true; break;}
          case (this.state = 2): {this.isAbgelehnt = true; break;}
        }*/
        console.log('getApplicationsList a ' + this.geschaeftsstelle);
        console.log(this.geschaeftsstelle);
      }         );
  }

/*  public getApplication (id: number){
    this.apiService.getApplication(id)
      .subscribe((data) => {
        console.log(data);
        this.geschaeftsstelle = data;

      }         );
  }*/
  ngOnInit() {
    this.getApplicationsList();
  }
}
