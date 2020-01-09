export class FormInfo {
  // anrede: string;
  // vorname: string;
  // nachname: string;
  // traeger: string;
  // strasse: string;
  // hausnr: number;
  // plz: number;
  // email: string;
  // tel: number;
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



  constructor(/*anrede: string, vorname: string, nachname: string, traeger: string, strasse: string, hausnr: number, plz: number,
              email: string, tel: number,*/ projektname: string, beschreibung: string, startdatum: string, enddatum: string,
                                            ort: string, zielgruppe: string, anzteiln: number, oeffarb: string, oeffarbbeschr: string) {
    // this.anrede = anrede;
    // this.vorname = vorname;
    // this.nachname = nachname;
    // this.traeger = traeger;
    // this.strasse = strasse;
    // this.hausnr = hausnr;
    // this.plz = plz;
    // this.email = email;
    // this.tel = tel;
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
