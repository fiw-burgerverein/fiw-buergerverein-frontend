import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ContentComponent } from './content/content.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {_MatMenuDirectivesModule, MatMenuModule} from '@angular/material/menu';
import {HttpClientModule} from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {LayoutModule} from '@angular/cdk/layout';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { FormulaComponent } from './formula/formula.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { FormulaProjektComponent } from './formula-projekt/formula-projekt.component';
import { RegistrierungComponent } from './registrierung/registrierung.component';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatStepperModule} from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzFooterComponent } from './datenschutz-footer/datenschutz-footer.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatExpansionModule} from '@angular/material/expansion';
// import {CdkColumnDef, CdkTableModule} from '@angular/cdk/table';
// import {UebersichtComponent} from './uebersicht/uebersicht.component';
// import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { DetailseiteAntragComponent } from './detailseite-antrag/detailseite-antrag.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { ApplicationComponent } from './application/application.component';
import { AllapplicationsComponent } from './allapplications/allapplications.component';
import { GeschaeftsstelleComponent } from './geschaeftsstelle/geschaeftsstelle.component';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';


// I keep the new line
@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    FormulaComponent,
    FormulaProjektComponent,
    RegistrierungComponent,
    LoginComponent,
    DatenschutzComponent,
    ImpressumComponent,
    DatenschutzFooterComponent,
    DetailseiteAntragComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    // UebersichtComponent,
    ApplicationComponent,
    AllapplicationsComponent,
    GeschaeftsstelleComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        MatSliderModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        HttpClientModule,
        _MatMenuDirectivesModule,
        MatMenuModule,
        MatCardModule,
        MatGridListModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
        MatCheckboxModule,
        MatSelectModule,
        MatInputModule,
        MatChipsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatStepperModule,
        OverlayModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatExpansionModule,
        PDFExportModule
    ],

  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})

// Test ob Angular Material funktioniert
@NgModule({
  imports: [MatSliderModule, BrowserAnimationsModule],
})
export class AppModule {
}
