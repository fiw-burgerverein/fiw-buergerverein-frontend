import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {AufwandInfo, FormInfo, SachkostenInfo} from '../formService/form-info';
import {FormService} from '../formService/form.service';
import {FormControl, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import {Response} from '../formService/response.model';
// import { defineFont } from '@progress/kendo-drawing/pdf';
// import * as jspdf from 'jspdf';
// import html2canvas from 'html2canvas';

// defineFont({
//   Verdana             : '/fonts/verdana.ttf',
// });


@Component({
  selector: 'app-formula-projekt',
  templateUrl: './formula-projekt.component.html',
  styleUrls: ['./formula-projekt.component.css']
})

export class FormulaProjektComponent implements OnInit {
  // @ts-ignore
  @ViewChild('content') content: ElementRef;
  // @ts-ignore
  @ViewChild('sachkosten') content: ElementRef;
  // @ts-ignore
  @ViewChild('aufwand') test: ElementRef;
  // @ts-ignore
  @ViewChild('betrag') keywordsInput;
  // @ts-ignore
  @ViewChild('zweck') keywordsInput;
  displayedColumns = ['Posten', 'Betrag'];
  SACHKOSTEN_ELEMENT_DATA: Element[] = [{Posten: '', Betrag: 0}];
  AUFWAND_ELEMENT_DATA: Element[] = [{Posten: '', Betrag: 0}];
  dataSourceAufwand = new MatTableDataSource(this.AUFWAND_ELEMENT_DATA);
  dataSourceSachkosten = new MatTableDataSource(this.SACHKOSTEN_ELEMENT_DATA);
  private aufwandSumme = 0;
  private sachkostenSumme = 0;
  private gesamtSumme = 0;

  form: any = {};
  aufwandKostenArray: AufwandInfo[] = [];
  sachKostenArray: SachkostenInfo[] = [];
  formInfo: FormInfo;
  emailCtrl = new FormControl('', [Validators.required, Validators.email]);
  isLinear = false;
  isSubmitted = false;
  isSubmitFailed = false;
  errorMessage = '';
  // persAngaben: FormGroup;
  // projAngaben: FormGroup;
  aufwandKostenExist = false;
  sachKostenExist = false;

  response: Response;
  formId: number;
  createdAt: string;

  minStartDate = new Date();
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  getErrorEmail() {
    return this.emailFormControl.hasError('required') ? 'Bitte tragen Sie Ihre E-Mail-Adresse ein.' :
      this.emailFormControl.hasError('email') ? 'Bitte tragen Sie ein gültiges E-Mail ein.' :
        '';
  }

  addElementAufwand(z: Event) {
    const textareaArray = document.getElementsByClassName('zweck-aufwand');
    const zweck = (textareaArray.item(textareaArray.length - 1) as HTMLInputElement).value;
    const betrag = Number(+(z.currentTarget as HTMLInputElement).value);
    this.dataSourceAufwand.data.push({Posten: zweck, Betrag: betrag});
    this.dataSourceAufwand = new MatTableDataSource(this.AUFWAND_ELEMENT_DATA);
    // tslint:disable-next-line:prefer-for-of
    for (const aufwand of this.AUFWAND_ELEMENT_DATA) {
      this.aufwandSumme = this.aufwandSumme + aufwand.Betrag;
    }
    this.gesamtSumme = this.aufwandSumme + this.sachkostenSumme;
    this.aufwandKostenArray.push(new AufwandInfo(zweck, betrag));
    this.aufwandKostenExist = true;
    return this.aufwandSumme;
  }
  addElementSachkosten(z: Event) {
    const textareaArray = document.getElementsByClassName('zweck-sachkosten');
    const zweck = (textareaArray.item(textareaArray.length - 1) as HTMLInputElement).value;
    const betrag = Number(+(z.currentTarget as HTMLInputElement).value);
    this.dataSourceSachkosten.data.push({Posten: zweck, Betrag: betrag});
    this.dataSourceSachkosten = new MatTableDataSource(this.SACHKOSTEN_ELEMENT_DATA);
    for (const sachkosten of this.SACHKOSTEN_ELEMENT_DATA) {
      this.sachkostenSumme = this.sachkostenSumme + sachkosten.Betrag;
    }
    this.gesamtSumme = this.aufwandSumme + this.sachkostenSumme;
    this.sachKostenArray.push(new SachkostenInfo(zweck, betrag));
    this.sachKostenExist = true;
    return this.sachkostenSumme;
  }
  getError() {
    {return'der Betrag darf nicht mehr als €1000 sein.'; }
  }

  constructor(private formService: FormService) { }


  ngOnInit() { }

  onSubmit() {
    console.log(this.form);
    this.formInfo = new FormInfo(
      this.form.anrede,
      this.form.vorname,
      this.form.nachname,
      this.form.einrichtung,
      this.form.strasse,
      this.form.hausnr,
      this.form.plz,
      this.form.email,
      this.form.telnr,
      this.form.projektname,
      this.form.beschreibung,
      this.form.startdatum,
      this.form.enddatum,
      this.form.ort,
      this.form.zielgruppe,
      this.form.anzteiln,
      this.form.oeffarb,
      this.form.oeffarbbeschr,
      this.aufwandKostenArray,
      this.sachKostenArray,
    );

    this.formService.saveForm(this.formInfo)
      .subscribe(
        data => {
          this.response = data;
          this.isSubmitted = true;
          this.isSubmitFailed = false;
          this.formId = this.response.body.result.formId;
          this.createdAt = this.response.body.result.createdAt;
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isSubmitFailed = true;
        }
      );
  }

}
export interface Element {
  Posten: string;
  Betrag: number;
}

