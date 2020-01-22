import { Component, Input, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-formula-projekt',
  templateUrl: './formula-projekt.component.html',
  styleUrls: ['./formula-projekt.component.css']
})
export class FormulaProjektComponent {
  // @ts-ignore
  @ViewChild('content') content: ElementRef;
  // @ts-ignore
  @ViewChild('betrag') keywordsInput;
  // @ts-ignore
  @ViewChild('zweck') keywordsInput;
  displayedColumns = ['posten', 'Betrag'];
  ELEMENT_DATA: Element[] = [{posten: '', Betrag: 0}];
  myDataSource = new MatTableDataSource(this.ELEMENT_DATA);
  // postText = '';
  // zeil = [];
  // tslint:disable-next-line:no-unused-expression
  private sum: number;
  addElement(z: Event) {
    console.log(this.myDataSource.data.length);
    /*
    const zweck = (document.getElementById('zweck') as HTMLInputElement).value;
    const betrag = Number((document.getElementById('betrag') as HTMLInputElement).value);
     */
    const textareaArray = document.getElementsByTagName('textarea');
    // tslint:disable-next-line:prefer-for-of
    const zweck = textareaArray[textareaArray.length - 1].value;
    const betrag = Number(+(z.currentTarget as HTMLInputElement).value);
    // if ( this.getTotalCost() + betrag > 1000) {return this.getError(); }
    this.myDataSource.data.push({posten: zweck, Betrag: betrag});
    // console.log(textareaArray.length);
    this.myDataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.sum = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.ELEMENT_DATA.length; i++) {
      this.sum = this.sum + this.ELEMENT_DATA[i].Betrag;
    }
    return this.sum;
  }
  // this.zeil.push({posten: '', Betrag:  + (z.srcElement as HTMLInputElement).value});
  getError() {
    {return'der Betrag darf nicht mehr als 1000$ sein.'; }
  }


  constructor() { }

  ngOnInit() {
  }

}
export interface Element {
  posten: string;
  Betrag: number;
}
