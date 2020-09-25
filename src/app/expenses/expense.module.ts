import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseService } from "./services/expense.service";
import { RouterModule, Routes } from '@angular/router';
import { ExpenseHomeComponent } from './expense-home/expense-home.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ReactiveFormsModule } from '@angular/forms';

const expenseRoutes: Routes = [
  {
    path: '',
    component: ExpenseHomeComponent,
    children: [
      {
        path: 'add',
        component: AddExpenseComponent
      },
      {
        path: ':id',
        component: ExpenseDetailComponent
      },
      {
        path: ':id/edit',
        component: AddExpenseComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    ExpenseHomeComponent,
    ExpenseListComponent,
    ExpenseDetailComponent,
    AddExpenseComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
