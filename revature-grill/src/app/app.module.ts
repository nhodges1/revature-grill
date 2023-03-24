import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Input1Component } from './components/input1/input1.component';
import { Register1Component } from './pages/register1/register1.component';

@NgModule({
  declarations: [
    AppComponent,
    Input1Component,
    Register1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    Input1Component,
    Register1Component
],
  bootstrap: [AppComponent]
})
export class AppModule { }
