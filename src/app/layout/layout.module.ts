import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as LayoutComponents from './index';

@NgModule({
  declarations: [
    LayoutComponents.HeaderComponent,
    LayoutComponents.FooterComponent,
  ],
  imports: [CommonModule],
  exports: [
    LayoutComponents.HeaderComponent,
    LayoutComponents.FooterComponent,
  ]
})
export class LayoutModule {}
