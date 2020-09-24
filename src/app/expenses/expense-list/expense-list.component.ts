import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Expense } from '../models/expense.model';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {
  expenses: Expense[];
  expenses$: Observable<Expense[]>;

  constructor(private expenseService: ExpenseService) {
    this.expenses$ = this.expenseService.getExpensesFromFirestore();
  }

  ngOnInit(): void {
    this.expenses = this.expenseService.getAllExpenses();
  }

}
