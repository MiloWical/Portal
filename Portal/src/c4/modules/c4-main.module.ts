import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { C4MainComponent } from '../components/c4-main/c4-main.component'
import { C4TitleComponent } from '../components/c4-title-bar/c4-title-bar.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    C4MainComponent,
    C4TitleComponent
  ],
  exports: [
    C4MainComponent
  ]
})
export class C4MainModule { }
