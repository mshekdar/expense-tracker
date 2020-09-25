import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Expense } from '../models/expense.model';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {
  expenses$: Observable<Expense[]>;

  constructor(private expenseService: ExpenseService, private router: Router) {
    this.expenses$ = this.expenseService.getAllExpenses();
  }

  ngOnInit(): void {}

  deleteExpense(id: string): void {
    this.expenseService.deleteExpense(id).then(
      () => this.router.navigateByUrl('/expenses')
    )
  }

  editExpense(id: string, e: Event): void {
    e.stopPropagation();
    this.router.navigate(['expenses', id, 'edit']);
  }

}
