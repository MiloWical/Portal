import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { C4MainModule } from './c4-main/c4-main.module'

import { C4Component } from '../c4/c4.component'

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    C4MainModule
  ],
  exports: [
    C4Component
  ],
  declarations: [
    C4Component
  ],
  providers: [],
  bootstrap: [
    C4Component
  ]
})
export class C4Module { }
