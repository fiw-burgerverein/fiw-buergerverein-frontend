import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {AllApplications} from '../models/allapplications.model';

@Component({
  selector: 'app-allapplications',
  templateUrl: './allapplications.component.html',
  styleUrls: ['./allapplications.component.css']
})
export class AllapplicationsComponent implements OnInit {
  applications: AllApplications;

  constructor(private apiService: ApiService) { }

  public getAllApplicationsForUser() {
    this.apiService.getAllApplicationsForUser()
      .subscribe((data) => {
        console.log('getAllApplications d ' + data);
        console.log(data);
        this.applications = data;
        console.log('getAllApplications a ' + this.applications);
        console.log(this.applications);
      }         );
  }

  ngOnInit() {
    this.getAllApplicationsForUser();
  }

}
