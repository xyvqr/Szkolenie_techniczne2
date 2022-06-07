import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {PriceComponent} from "./price/price.component";
import {RentComponent} from "./rent/rent.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'price', component: PriceComponent},
   {path: 'contact', component:ContactComponent },
   {path: 'rent', component: RentComponent },
   {path: 'login', component: LoginComponent },
   {path: 'register', component: RegisterComponent },
  {path: '**', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
