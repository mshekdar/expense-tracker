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
  expenses$: Observable<Expense[]>;

  constructor(private expenseService: ExpenseService) {
    this.expenses$ = this.expenseService.getAllExpenses();
  }

  ngOnInit(): void {
    this.expenses$.subscribe(console.log);
  }

  onAdd() {
    this.expenseService.addExpense({
      amount: 2003,
      category: 'Travel',
      subscategory: 'Travel',
      description: 'bus tickets',
      id: '123'
    })
  }

}
