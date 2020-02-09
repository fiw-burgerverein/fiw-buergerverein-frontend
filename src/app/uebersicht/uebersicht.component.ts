import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as jspdf from 'jspdf';
import {AufwandInfo, FormInfo, SachkostenInfo} from '../formService/form-info';
@Component({
  selector: 'app-uebersicht',
  templateUrl: './uebersicht.component.html',
  styleUrls: ['./uebersicht.component.css']
})
export class UebersichtComponent implements OnInit {
  // @ts-ignore
  @ViewChild('content') content: ElementRef;
  form: any = {};
  formInfo: FormInfo;
  aufwandKostenArray: AufwandInfo[] = [];
  sachKostenArray: SachkostenInfo[] = [];
  aufwandKostenExist = false;
  sachKostenExist = false;
  private gesamtSumme = 0;

  constructor() {
  }

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
  }

  download() {
    const doc = new jspdf('p', 'mm', 'a4');
    const preview = this.content.nativeElement;
    // @ts-ignore
    doc.fromHTML(preview.innerHTML, 17, 20, {
      width: 300,
    });
    // doc.text(30, 80, this.content);
    doc.save('Test.pdf');
  }
  // const div = document.getElementById('html2Pdf');
  // const options = {background: 'white', height: div.clientHeight, width: div.clientWidth};
  // @ts-ignore
  // html2canvas (div, options).then((canvas) => {
  // Initialize JSPDF
  // const doc = new jsPDF('p', 'mm', 'a4');
  // Converting canvas to Image
  // const imgData = canvas.toDataURL('image/PNG');
  // Add image Canvas to PDF
  // doc.addImage(imgData, 'PNG', 20, 20);

  // const pdfOutput = doc.output();
  // using ArrayBuffer will allow you to put image inside PDF
  // const buffer = new ArrayBuffer(pdfOutput.length);
  //  const array = new Uint8Array(buffer);
  // for (let i = 0; i < pdfOutput.length; i++) {
  //  array[i] = pdfOutput.charCodeAt(i);
  // }

  // Name of pdf
  // const fileName = 'example.pdf';

  // Make file
  // doc.save(fileName);

  // });

}
