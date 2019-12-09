import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule} from '@angular/material/slider';
import {FooterComponent} from "./footer/footer.component";
import { HyperlinkDownloadComponent } from './hyperlink-download/hyperlink-download.component';
import { FormulaComponent } from './formula_persoenliche/formula.component';
import {ReactiveFormsModule} from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HyperlinkDownloadComponent,
    FormulaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// Test ob Angular Material funktioniert
@NgModule({
  imports: [MatSliderModule],
 // bootstrap:[AppComponent]
})
export class AppModule { }

