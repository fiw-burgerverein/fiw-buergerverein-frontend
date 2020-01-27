export class Application {
  formId: number;
  createdAt: string;
  status: string;
  projectName: string;
  beschreibung: string;
  startDate: Date;
  endDate: Date;
  ort: string;
  sachkostenSum: number;
  aufwandSum: string;
  anrede: string;
  vorname: string;
  nachname: string;
  strasse: string;
  hausNr: number;
  plz: number;
  email: string;

  get getStartDate(): Date {
    return new Date(this.startDate);
  }

  get getEndDate(): Date {
    return new Date(this.endDate);
  }

  constructor(data: any) {
    Object.assign(this, data.result);
  }
}
