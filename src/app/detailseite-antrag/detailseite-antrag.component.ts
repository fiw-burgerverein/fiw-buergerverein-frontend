import { Component, OnInit } from '@angular/core';
import {FormService} from '../formService/form.service';
import {ApiService} from '../api.service';
import {Application} from '../models/detailseite.model';
/*import {ChangeStateInfo} from "../auth/change-state-info";*/
import { ActivatedRoute } from '@angular/router';
import {StateInfo} from '../formService/state-Info';

@Component({
  selector: 'app-detailseite-antrag',
  templateUrl: './detailseite-antrag.component.html',
  styleUrls: ['./detailseite-antrag.component.css']
})
export class DetailseiteAntragComponent implements OnInit {

  constructor(private route: ActivatedRoute, private formService: FormService, private apiService: ApiService) { }
  intState: number;
/*  abgelehnt: boolean;*/
  isChanged = false;
  errorMessage = '';
  formIdString: string;
  private stateInfo: StateInfo;

  application: Application;

  ngOnInit() {
    this.formIdString = this.route.snapshot.paramMap.get('formId');
    const formId = +this.formIdString;
    this.getApplication(formId);
  }

/*  callChangeState(event) {
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

      },
      error => {
        console.log(error);
        this.errorMessage = 'Status konnte nicht geändert werden';
        this.isChanged = false;
      }
    );
  }*/

  public getApplication(id: number) {
    this.apiService.getApplication(id)
      .subscribe((data) => {
        console.log(data);
        this.application = data;
      }         );
  }

  genehmigen() {
    this.formIdString = this.route.snapshot.paramMap.get('formId');
    const formId = +this.formIdString;
    this.intState = 1;
    this.stateInfo = new StateInfo(
      this.intState, formId
    );
    this.formService.changeState(this.stateInfo).subscribe(
      data => {
        console.log(data);
        this.isChanged = true;
      /*  router navigate*/
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isChanged = false;
      }
    );
  }

  ablehnen() {
    this.formIdString = this.route.snapshot.paramMap.get('formId');
    const formId = +this.formIdString;
    this.intState = 2;
    this.stateInfo = new StateInfo(
      this.intState, formId
    );
   /* this.stateInt = 2;*/
    this.formService.changeState(this.stateInfo).subscribe(
      data => {
        console.log(data);
        this.isChanged = true;
        /*  router navigate*/
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isChanged = false;
      }
    );
  }
}
