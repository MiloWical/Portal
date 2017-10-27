import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { C4MainComponent } from '../components/c4-main/c4-main.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    C4MainComponent
  ],
  exports: [
    C4MainComponent
  ]
})
export class C4MainModule { }
