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



  constructor(anrede: string, vorname: string, nachname: string, einrichtung: string, strasse: string, hausnr: number, plz: number,
              email: string, telnr: number, projektname: string, beschreibung: string, startdatum: string, enddatum: string,
              ort: string, zielgruppe: string, anzteiln: number, oeffarb: string, oeffarbbeschr: string) {
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
  }
}
