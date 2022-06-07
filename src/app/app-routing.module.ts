import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {ONasComponent} from "./o-nas/o-nas.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
   {path: 'contact', component:ContactComponent },
   {path: 'o-nas', component:ONasComponent },
   {path: 'login', component: LoginComponent },
   {path: 'register', component: RegisterComponent },
  {path: '**', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
