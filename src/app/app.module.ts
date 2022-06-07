import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AppRoutingModule} from "./app-routing.module";
import { ONasComponent } from './o-nas/o-nas.component';
import { ToyotaComponent } from './toyota/toyota.component';
import { HyundaiComponent } from './hyundai/hyundai.component';
import { MazdaComponent } from './mazda/mazda.component';
import { MercedesComponent } from './mercedes/mercedes.component';
import { BmwComponent } from './bmw/bmw.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ONasComponent,
    ToyotaComponent,
    HyundaiComponent,
    MazdaComponent,
    MercedesComponent,
    BmwComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
