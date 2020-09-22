import { Injectable } from '@angular/core';
import { Expense } from "../models/expense.model"

@Injectable({providedIn: 'root'})
export class ExpenseService {
  expenses: Expense[] = [
    {
      category: 'Travel',
      subscategory: 'Travel',
      description: 'Bus Tickets',
      amount: 1500,
    },
    {
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
}
