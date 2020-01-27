import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../app/api.service';
import {Application} from './application.model';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
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
    this.getApplication(2);
  }

}
