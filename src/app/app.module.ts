import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from './material/material.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { NgxMaskModule } from 'ngx-mask';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Ng2OdometerModule } from 'ng2-odometer';
import { FlexLayoutModule } from "@angular/flex-layout";
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

//directives
import { OnlyNumberDirective } from './directives/numeros.directive';

//ngx-bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

//services
import { NavService } from './services/nav.service';

//componets
import { AppComponent } from './app.component';
import { LoginComponent } from './acesso/login/login.component';
import { ResetComponent } from './acesso/reset/reset.component';
import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './admin/footer/footer.component';
import { HeaderComponent } from './admin/header/header.component';
import { SideComponent } from './admin/side/side.component';
import { DashboardComponent } from './admin/views/dashboard/dashboard.component';


@NgModule({
  declarations: [
    OnlyNumberDirective,
    AppComponent,
    LoginComponent,
    ResetComponent,
    AdminComponent,
    FooterComponent,
    HeaderComponent,
    SideComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    DeviceDetectorModule,
    NgxMaskModule.forRoot(),
    DeviceDetectorModule,
    Ng2OdometerModule,
    FlexLayoutModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    MatDatepickerModule, 
    NavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
