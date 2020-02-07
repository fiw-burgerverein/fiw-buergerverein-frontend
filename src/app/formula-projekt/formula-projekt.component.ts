import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {AufwandInfo, FormInfo, SachkostenInfo} from '../formService/form-info';
import {FormService} from '../formService/form.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
import {Result} from '../formService/result.model';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

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
  // result: Result;

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


  ngOnInit() {
  }

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
          console.log(data);
          // this.result = JSON.parse(data['body']).value[2];
          this.isSubmitted = true;
          this.isSubmitFailed = false;
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isSubmitFailed = true;
        }
       );
  }
  getErrorMessage() {
    return this.emailCtrl.hasError('required') ? 'Sie müssen eine gültige E-Mail-Adresse eingeben' :
      this.emailCtrl.hasError('email') ? 'Keine gültige E-Mail-Adresse' :
        '';
  }
    // download() {
    // const div = document.getElementById('html2Pdf');
    // const options = {background: 'white', height: div.clientHeight, width: div.clientWidth};
    // @ts-ignore
    // html2canvas(div, options).then((canvas) => {
      // Initialize JSPDF
      // const doc = new jspdf('p', 'mm', 'a4');
      // const preview = this.content.nativeElement;
      // @ts-ignore
     //  doc.fromHTML(preview.innerHTML, 17, 20, {
      //  width: 300,
    //  });
      // doc.text(30, 80, this.content);
     // doc.save('Test.pdf');
 // }
      // Converting canvas to Image
     // const imgData = canvas.toDataURL('image/PNG');
      // Add image Canvas to PDF
      // doc.addImage(imgData, 'PNG', 20, 20);

     //  const pdfOutput = doc.output();
      // using ArrayBuffer will allow you to put image inside PDF
      // const buffer = new ArrayBuffer(pdfOutput.length);
      // const array = new Uint8Array(buffer);
      // for (let i = 0; i < pdfOutput.length; i++) {
      //  array[i] = pdfOutput.charCodeAt(i);


      // Name of pdf
      // const fileName = 'example.pdf';

      // Make file
     // doc.save(fileName);
    // })
}
export interface Element {
  Posten: string;
  Betrag: number;
}


