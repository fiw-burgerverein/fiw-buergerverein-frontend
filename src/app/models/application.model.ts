import {Deserializable} from './desirializable.model';

export class Application implements Deserializable {
  formId: number;
  createdAt: string;
  status: string;
  projektname: string;
  beschreibung: string;
  startdatum: Date;
  enddatum: Date;
  ort: string;
  zielgruppe: string;
  anzteiln: number;
  oeffarb: string;
  oeffarbbeschr: string;
  gesamtkosten: number;
  // aufwandSum: string;

  anrede: string;
  vorname: string;
  nachname: string;
  einrichtung: string;
  strasse: string;
  hausnr: number;
  plz: number;
  email: string;
  telnr: number;

  get getStartdatum(): Date {
    return new Date(this.startdatum);
  }

  get getEnddatum(): Date {
    return new Date(this.enddatum);
  }

  constructor(data: any) {
    console.log('constructor ');
    console.log(data.result.formular);
    Object.assign(this, data.result.formular);
  }

  deserialize(data: any): this {
    Object.assign(this, data.result.formular);
    return this;
  }
}
