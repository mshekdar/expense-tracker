import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseService } from "./services/expense.service";
import { RouterModule, Routes } from '@angular/router';
import { ExpenseHomeComponent } from './expense-home/expense-home.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';

const expenseRoutes: Routes = [
  {
    path: '',
    component: ExpenseHomeComponent,
    children: [
      {
        path: ':id',
        component: ExpenseDetailComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    ExpenseHomeComponent,
    ExpenseListComponent,
    ExpenseDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(expenseRoutes),
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ExpenseService
  ]
})
export class ExpenseModule { }
