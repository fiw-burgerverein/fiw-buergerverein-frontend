import { Component, OnInit } from '@angular/core';
import {FormService} from '../formService/form.service';
import {ApiService} from '../api.service';
import {Application} from '../models/detailseite.model';
/*import {ChangeStateInfo} from "../auth/change-state-info";*/

@Component({
  selector: 'app-detailseite-antrag',
  templateUrl: './detailseite-antrag.component.html',
  styleUrls: ['./detailseite-antrag.component.css']
})
export class DetailseiteAntragComponent implements OnInit {

  constructor(private formService: FormService, private apiService: ApiService) { }
  stateInt: number;
/*  abgelehnt: boolean;*/
  isChanged = false;
  errorMessage = '';

  application: Application;

  ngOnInit() {
    this.getApplication(3);
  }

  callChangeState(event) {
    if (event.target.id === 'btnGenehmigen') {
      this.stateInt = 1;
      console.log(this.stateInt);
    } else if (event.target.id === 'btnAblehnen') {
      this.stateInt = 2;
    }
    this.formService.changeState(this.stateInt).subscribe(
      data => {
        console.log(data);
        this.isChanged = true;
   /*    navigieren zu?*/
      },
      error => {
        console.log(error);
        this.errorMessage = 'Status konnte nicht geändert werden';
        this.isChanged = false;
      }
    );
  }

  public getApplication(id: number) {
    this.apiService.getApplication(id)
      .subscribe((data) => {
        console.log(data);
        this.application = data;
      }         );
  }

/*  genehmigen() {
    this.stateInt = 1;
    this.formService.changeState(this.stateInt).subscribe(
      data => {
        console.log(data);
        this.isChanged = true;
      /!*  router navigate*!/
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isChanged = false;
      }
    );
  }

  ablehnen() {
    this.stateInt = 2;
    this.formService.changeState(this.stateInt).subscribe(
      data => {
        console.log(data);
        this.isChanged = true;
        /!*  router navigate*!/
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isChanged = false;
      }
    );
  }*/
}
