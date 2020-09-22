import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as ExpenseComponents from "./index";
import { ExpenseService } from "./services/expense.service";

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
  ],
  providers: [
    ExpenseService
  ]
})
export class ExpenseModule { }
