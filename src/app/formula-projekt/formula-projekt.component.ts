import { Component, OnInit } from '@angular/core';
import {FormInfo} from '../formService/form-info';
import {FormService} from '../formService/form.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-formula-projekt',
  templateUrl: './formula-projekt.component.html',
  styleUrls: ['./formula-projekt.component.css']
})
export class FormulaProjektComponent implements OnInit {
  form: any = {};
  formInfo: FormInfo;
  emailCtrl = new FormControl('', [Validators.required, Validators.email]);
  isLinear = false;
  // persAngaben: FormGroup;
  // projAngaben: FormGroup;

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
      this.form.oeffarbbeschr
      );

    this.formService.saveForm(this.formInfo).subscribe(
      data => {
        console.log(data);
        // this.isSignedUp = true;
        // this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        // this.errorMessage = error.error.message;
        // this.isSignUpFailed = true;
      }
    );
  }
  getErrorMessage() {
  return this.emailCtrl.hasError('required') ? 'Sie müssen eine gültige E-Mail-Adresse eingeben' :
    this.emailCtrl.hasError('email') ? 'Keine gültige E-Mail-Adresse' :
    '';

}

}
