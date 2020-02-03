import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Geschaeftsstelle } from '../models/application.model';
@Component({
  selector: 'app-geschaeftsstelle',
  templateUrl: './geschaeftsstelle.component.html',
  styleUrls: ['./geschaeftsstelle.component.css']
})

export class GeschaeftsstelleComponent implements OnInit {
geschaeftsstelle: Geschaeftsstelle;

  constructor(private apiService: ApiService) { }

  public getApplication (id: number){
    this.apiService.getApplication(id)
      .subscribe((data) => {
        console.log(data);
        this.geschaeftsstelle = data;
      }         );
  }
  ngOnInit() {
    this.getApplication(3);
  }

}
