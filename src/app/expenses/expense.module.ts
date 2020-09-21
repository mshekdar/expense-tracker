import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as ExpenseComponents from "./index";

@NgModule({
  declarations: [
    ExpenseComponents.ExpenseHomeComponent,
    ExpenseComponents.ExpenseListComponent,
    ExpenseComponents.ExpenseDetailComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExpenseComponents.ExpenseHomeComponent,
    ExpenseComponents.ExpenseListComponent,
    ExpenseComponents.ExpenseDetailComponent,
  ]
})
export class ExpenseModule { }
