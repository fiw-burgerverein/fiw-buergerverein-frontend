import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentComponent} from './content/content.component';
import {RegistrierungComponent} from './registrierung/registrierung.component';
import {FormulaProjektComponent} from './formula-projekt/formula-projekt.component';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header/header.component';
import {DatenschutzComponent} from './datenschutz/datenschutz.component';
import {ImpressumComponent} from './impressum/impressum.component';
import {DatenschutzFooterComponent} from './datenschutz-footer/datenschutz-footer.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {DetailseiteAntragComponent} from './detailseite-antrag/detailseite-antrag.component';
import {InfoseiteComponent} from './infoseite/infoseite.component';
import {GeschaeftsstelleComponent} from './geschaeftsstelle/geschaeftsstelle.component';


const routes: Routes = [
  {path: '', component: ContentComponent},
  {path: 'registrieren', component: RegistrierungComponent},
  {path: 'antrag-stellen', component: FormulaProjektComponent},
  {path: 'login', component: LoginComponent},
  {path: 'datenschutz', component: DatenschutzComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'datenschutz-footer', component: DatenschutzFooterComponent},
  {path: 'registrieren/accountbestaetigung', component: RegistrierungComponent},
  {path: 'passwort-vergessen', component: ForgotPasswordComponent},
  {path: 'passwort-zuruecksetzen', component: ResetPasswordComponent},
  // {path: 'detailseite', component: DetailseiteAntragComponent},
  // {path: 'detailseite', component: DetailseiteAntragComponent},
  {path: 'infos-zum-kiezfond', component: InfoseiteComponent},
  {path: 'detailseite', component: DetailseiteAntragComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'geschaeftsstelle', component: GeschaeftsstelleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
