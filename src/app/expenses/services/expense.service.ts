import { Injectable } from '@angular/core';
import { Expense } from "../models/expense.model"

@Injectable({providedIn: 'root'})
export class ExpenseService {
  expenses: Expense[] = [
    {
      id: 1,
      category: 'Travel',
      subscategory: 'Travel',
      description: 'Bus Tickets',
      amount: 1500,
    },
    {
      id: 2,
      category: 'Home',
      subscategory: 'Rent',
      description: 'Rent for Sept\'20',
      amount: 15000
    }
  ];

  constructor() { }

  getAllExpenses(): Expense[] {
    return this.expenses.slice();
  }

  getExpense(id: number): Expense {
    return this.expenses.slice().find(ex => ex.id === id);
  }
}
