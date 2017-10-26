import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { C4Module } from '../c4/c4.module'

import { AppComponent } from './app.component';

const routes:Routes = [
  { path: '', component: AppComponent }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    C4Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
