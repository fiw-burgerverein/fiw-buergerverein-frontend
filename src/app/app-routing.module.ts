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
import {DetailseiteAntragComponent} from "./detailseite-antrag/detailseite-antrag.component";
import {Application} from "./models/application.model";
import {ApplicationComponent} from "./application/application.component";
import {AllapplicationsComponent} from "./allapplications/allapplications.component";
import {GeschaeftsstelleComponent} from "./geschaeftsstelle/geschaeftsstelle.component";


const routes: Routes = [
  {path: 'formula', component: FormulaComponent},
  {path: '', component: ContentComponent},
  {path: 'registrieren', component: RegistrierungComponent},
  {path: 'formula-projekt', component: FormulaProjektComponent},
  {path: 'login', component: LoginComponent},
  {path: 'datenschutz', component: DatenschutzComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'datenschutz-footer', component: DatenschutzFooterComponent},
  {path: 'detailseite', component: DetailseiteAntragComponent},
  {path: 'application', component: ApplicationComponent},
  {path: 'allapplications', component: AllapplicationsComponent},
  {path: 'geschaeftsstelle', component: GeschaeftsstelleComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
