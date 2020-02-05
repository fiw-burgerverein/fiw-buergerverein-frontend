export class FormInfo {
  anrede: string;
  vorname: string;
  nachname: string;
  einrichtung: string;
  strasse: string;
  hausnr: number;
  plz: number;
  email: string;
  telnr: number;
  // 2. Seite
  projektname: string;
  beschreibung: string;
  startdatum: string;
  enddatum: string;
  ort: string;
  zielgruppe: string;
  anzteiln: number;
  oeffarb: string;
  oeffarbbeschr: string;
  aufwandArray: AufwandInfo[] = [];
  sachkostenArray: SachkostenInfo[] = [];



  constructor(anrede: string, vorname: string, nachname: string, einrichtung: string, strasse: string, hausnr: number, plz: number,
              email: string, telnr: number,
              // tslint:disable-next-line:max-line-length
              projektname: string, beschreibung: string, startdatum: string, enddatum: string, ort: string, zielgruppe: string, anzteiln: number, oeffarb: string, oeffarbbeschr: string,
              aufwandArray: AufwandInfo[], sachkostenArray: SachkostenInfo[]) {
    this.anrede = anrede;
    this.vorname = vorname;
    this.nachname = nachname;
    this.einrichtung = einrichtung;
    this.strasse = strasse;
    this.hausnr = hausnr;
    this.plz = plz;
    this.email = email;
    this.telnr = telnr;
    this.projektname = projektname;
    this.beschreibung = beschreibung;
    this.startdatum = startdatum;
    this.enddatum = enddatum;
    this.ort = ort;
    this.zielgruppe = zielgruppe;
    this.anzteiln = anzteiln;
    this.oeffarb = oeffarb;
    this.oeffarbbeschr = oeffarbbeschr;
    this.aufwandArray = aufwandArray;
    this.sachkostenArray = sachkostenArray;
    // this.aufwand.push(new AufwandInfo(this.zweck, AufwandInfo.kosten));
    // this.sachkosten.push(new SachkostenInfo(SachkostenInfo.zweck, SachkostenInfo.kosten));
  }
}

export class AufwandInfo {
  zweck: string;
  cost: number;
  constructor(zweck: string, cost: number) {
    this.zweck = zweck;
    this.cost = cost;
  }

  push(aufwandInfo1: AufwandInfo) {
    return [];
  }
}
export class SachkostenInfo {
  zweck: string;
  cost: number;
  constructor(zweck: string, cost: number) {
    this.zweck = zweck;
    this.cost = cost;
  }
}
