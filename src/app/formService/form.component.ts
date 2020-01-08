// import { Component, OnInit } from '@angular/core';
// import {FormInfo} from './form-info';
// import {FormService} from './form.service';
//
// @Component({
//   selector: 'app-form',
//   templateUrl: ['../formula-projekt/formula-projekt.component.html', ''],
//   styleUrls: ['./formula-projekt.component.css']
// })
// export class FormComponent implements OnInit {
//   form: any = {};
//   formInfo: FormInfo;
//
//   constructor(private formService: FormService) { }
//
//   ngOnInit() {
//   }
//   onSubmit() {
//     console.log(this.form);
//
//     this.formInfo = new FormInfo(
//       this.form.anrede,
//       this.form.vorname,
//       this.form.nachname,
//       this.form.traeger,
//       this.form.strasse,
//       this.form.hausnr,
//       this.form.plz,
//       this.form.email,
//       this.form.tel,
//       this.form.projektname,
//       this.form.beschreibung,
//       this.form.startdatum,
//       this.form.enddatum,
//       this.form.ort,
//       this.form.zielgruppe,
//       this.form.anzteiln,
//       this.form.oeffarb,
//       this.form.oeffarbbeschr
//     );
//
//     this.formService.saveForm(this.formInfo).subscribe(
//       data => {
//         console.log(data);
//         // this.isSignedUp = true;
//         // this.isSignUpFailed = false;
//       },
//       error => {
//         console.log(error);
//         // this.errorMessage = error.error.message;
//         // this.isSignUpFailed = true;
//       }
//     );
//   }
//
// }
