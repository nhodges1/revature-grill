import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {MenuComponent} from "./components/menu/menu.component";
import {RegisterComponent} from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { CartComponent } from "./components/cart/cart.component";
import { HomepageComponent } from './components/homepage/homepage.component';
import { ItemPageComponent } from './components/item-page/item-page.component';

const routes: Routes = [
  {path: 'navbar', component: NavbarComponent},
  {path: 'menu', component: MenuComponent},
  {path:'menu/:foodId', component: ItemPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
