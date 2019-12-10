import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})
export class FormulaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'Sie müssen eine gültige E-Mail-Adresse eingeben' :
      this.email.hasError('email') ? 'Keine gültige E-Mail-Adresse' :
        '';
  }
}

