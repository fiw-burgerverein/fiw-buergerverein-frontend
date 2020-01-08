import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { FormInfo } from './form-info';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class FormService {

  private formUrl = 'http://localhost:8080/user/1/formular';

  constructor(private http: HttpClient) { }

  saveForm(info: FormInfo): Observable<string> {
    return this.http.post<string>(this.formUrl, info, httpOptions);
  }
}


// import {FormBuilder, FormGroup} from '@angular/forms';
// import {environment} from '../../environments/environment';
//
// export class Form {
//   public form: FormGroup;
//   constructor(formBuilder: FormBuilder) {
//     this.form = formBuilder.group({
//     username: [],
//     email: [],
//     age: []
//   });
//   }
//
//   saveForm() {
//     console.log(this.form.value);
//     this.http.post<object>(`${environment.serverURL}/register`, this.form.value)
//       .subscribe(async (data) => {
//         for (const fieldName of Object.keys(data)) {
//           const serverErrors = data[fieldName];
//
//           const errors = {};
//           for (const serverError of serverErrors) {
//             errors[serverError] = true;
//           }
//
//           const control = this.form.get(fieldName);
//           control.setErrors(errors);
//           control.markAsDirty();
//         }
//
//         if (this.form.valid) {
//           const toast = await this.toastCtrl.create({
//             message: 'Registration successful',
//             duration: 3000
//           });
//           toast.present();
//         }
//       });
//   }
//
// }

