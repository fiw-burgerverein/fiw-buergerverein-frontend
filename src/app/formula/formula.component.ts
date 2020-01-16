import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})
export class FormulaComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor() {
  }

  ngOnInit() {
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'Sie müssen eine gültige E-Mail-Adresse eingeben' :
      this.email.hasError('email') ? 'Keine gültige E-Mail-Adresse' :
        '';

  }
}
