import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {AufwandInfo, FormInfo, SachkostenInfo} from '../formService/form-info';
import {FormService} from '../formService/form.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-formula-projekt',
  templateUrl: './formula-projekt.component.html',
  styleUrls: ['./formula-projekt.component.css']
})
export class FormulaProjektComponent implements OnInit {

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
  // gesamtSumme = this.aufwandSumme + this.sachkostenSumme;
  gesamtSumme = 0;

  form: any = {};
  aufwandForm: any = {};
  sachkostenForm: any = {};
  formInfo: FormInfo;
  aufwandInfo: AufwandInfo;
  sachkostenInfo: SachkostenInfo;
  emailCtrl = new FormControl('', [Validators.required, Validators.email]);
  isLinear = false;
  isSubmitted = false;
  isSubmitFailed = false;
  errorMessage = '';
  // persAngaben: FormGroup;
  // projAngaben: FormGroup;

  addElementAufwand(z: Event) {
    // console.log(this.dataSourceAufwand.data.length);
    const textareaArray = document.getElementsByTagName('textarea');
    const zweck = textareaArray[textareaArray.length - 1].value;
    const betrag = Number(+(z.currentTarget as HTMLInputElement).value);
    this.dataSourceAufwand.data.push({Posten: zweck, Betrag: betrag});
    this.dataSourceAufwand = new MatTableDataSource(this.AUFWAND_ELEMENT_DATA);
    this.aufwandSumme = 0;
    for (let i = 0; i < this.AUFWAND_ELEMENT_DATA.length; i++) {
      this.aufwandSumme = this.aufwandSumme + this.AUFWAND_ELEMENT_DATA[i].Betrag;
    }
    this.gesamtSumme = this.aufwandSumme + this.sachkostenSumme;
    console.log(this.gesamtSumme);
    return this.aufwandSumme;
  }
  addElementSachkosten(z: Event) {
    // console.log(this.dataSourceSachkosten.data.length);
    const textareaArray = document.getElementsByTagName('textarea');
    const zweck = textareaArray[textareaArray.length - 1].value;
    const betrag = Number(+(z.currentTarget as HTMLInputElement).value);
    this.dataSourceSachkosten.data.push({Posten: zweck, Betrag: betrag});
    this.dataSourceSachkosten = new MatTableDataSource(this.SACHKOSTEN_ELEMENT_DATA);
    this.sachkostenSumme = 0;
    for (let i = 0; i < this.SACHKOSTEN_ELEMENT_DATA.length; i++) {
      this.sachkostenSumme = this.sachkostenSumme + this.SACHKOSTEN_ELEMENT_DATA[i].Betrag;
    }
    this.gesamtSumme = this.aufwandSumme + this.sachkostenSumme;
    console.log(this.gesamtSumme);
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
      this.form.aufwand.push(new AufwandInfo(this.aufwandInfo.zweck, this.aufwandInfo.kosten)),
      this.form.sachkosten.push(new SachkostenInfo(this.sachkostenInfo.zweck, this.sachkostenInfo.kosten))
     );
    this.aufwandInfo = new AufwandInfo(
      this.aufwandForm.zweck,
      this.aufwandForm.kosten
    );
    this.sachkostenInfo = new SachkostenInfo(
      this.sachkostenForm.zweck,
      this.sachkostenForm.kosten
    );

    this.formService.saveForm(this.formInfo).subscribe(
      data => {
        console.log(data);
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


  generatePdf(action = 'download') {
    const documentDefinition = this.getDocumentDefinition();
    // pdfMake.createPdf(documentDefinition).download();
  }
  getDocumentDefinition() {
    sessionStorage.setItem('form', JSON.stringify(this.form));
    return {
      content: [
        {
          text: 'Antrag',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          columns: [
            [{
                text: this.form.anrede,
              },
              {
                text: this.form.vorname,
              },
              {
                text: 'E-Mail: ' + this.form.email,
              },
              {
                text: 'Telefonnummer : ' + this.form.telnr,
              }
            ],
            [
              {},
              {
                text: this.form.nachname,
              },
            ]
          ]
        }],
    };
  }

}
export interface Element {
  Posten: string;
  Betrag: number;
}
