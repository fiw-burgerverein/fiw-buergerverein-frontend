import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormulaComponent} from './formula/formula.component';
import {ContentComponent} from './content/content.component';
import {RegistrierungComponent} from './registrierung/registrierung.component';
import {FormulaProjektComponent} from './formula-projekt/formula-projekt.component';
import {LoginComponent} from './login/login.component';

import {DatenschutzComponent} from './datenschutz/datenschutz.component';
import {ImpressumComponent} from './impressum/impressum.component';
import {DatenschutzFooterComponent} from './datenschutz-footer/datenschutz-footer.component';


const routes: Routes = [
  {path: 'formula', component: FormulaComponent},
  {path: '', component: ContentComponent},
  {path: 'registrieren', component: RegistrierungComponent},
  {path: 'formula-projekt', component: FormulaProjektComponent},
  {path: 'login', component: LoginComponent},
  {path: 'datenschutz', component: DatenschutzComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'datenschutz-footer', component: DatenschutzFooterComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
