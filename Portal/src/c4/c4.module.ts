import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { C4MainComponent } from '../c4/c4-main/c4-main.component'

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    C4MainComponent
  ],
  declarations: [
    C4MainComponent
  ],
  providers: []
  // bootstrap: [C4Component]
})
export class C4Module { }
