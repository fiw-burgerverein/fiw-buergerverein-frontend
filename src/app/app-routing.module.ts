import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormulaComponent} from "./formula/formula.component";
import {ContentComponent} from "./content/content.component";
import {RegistrierungComponent} from "./registrierung/registrierung.component";
import {FormulaProjektComponent} from "./formula-projekt/formula-projekt.component";


const routes: Routes = [
  {path:'formula', component: FormulaComponent},
  {path:'', component: ContentComponent},
  {path:'registrieren', component:RegistrierungComponent},
  {path:'formula-projekt', component:FormulaProjektComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
