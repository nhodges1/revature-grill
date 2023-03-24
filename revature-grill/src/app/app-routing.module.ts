import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Register1Component } from './pages/register1/register1.component';

const routes: Routes = [
  {path:"register1", component:Register1Component},
];
console.log(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
