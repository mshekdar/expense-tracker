import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as CategoryComponents from './index';
@NgModule({
  declarations: [
    CategoryComponents.CategoryHomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CategoriesModule { }
