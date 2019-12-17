import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormulaComponent} from "./formula/formula.component";
import {ContentComponent} from "./content/content.component";
import {RegistrierungComponent} from "./registrierung/registrierung.component";


const routes: Routes = [
  {path:'formula', component: FormulaComponent},
  {path:'', component: ContentComponent},
  {path:'registrieren', component:RegistrierungComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
