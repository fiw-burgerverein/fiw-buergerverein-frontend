import { Component, OnInit } from '@angular/core';
import {FormService} from '../formService/form.service';
/*import {ChangeStateInfo} from "../auth/change-state-info";*/

@Component({
  selector: 'app-detailseite-antrag',
  templateUrl: './detailseite-antrag.component.html',
  styleUrls: ['./detailseite-antrag.component.css']
})
export class DetailseiteAntragComponent implements OnInit {

  /*changeStateInfo: ChangeStateInfo;*/
  stateInt: number;
  isChanged = false;
  errorMessage = 'Status konnte nicht geändert werden';

  constructor(private formService: FormService) { }

  ngOnInit() {
  }

  genehmigen() {
    this.stateInt = 1;
    this.formService.changeState(this.stateInt).subscribe(
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
    this.stateInt = 2;
    this.formService.changeState(this.stateInt).subscribe(
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
