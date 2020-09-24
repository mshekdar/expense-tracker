import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
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

  constructor(private http: HttpClient, private fireStore: AngularFirestore) { }

  getAllExpenses(): Expense[] {
    return this.expenses.slice();
  }

  getExpense(id: number): Expense {
    return this.expenses.slice().find(ex => ex.id === id);
  }

  save(): Observable<Expense[]> {
    return this.http.put<Expense[]>('https://expense-tracker-9291d.firebaseio.com/expenses.json', this.expenses);
  }

  get(): Observable<Expense[]> {
    return this.http.get<Expense[]>('https://expense-tracker-9291d.firebaseio.com/expenses.json');
  }

  getExpensesFromFirestore(): Observable<any[]> {
    return this.fireStore.collection('expenses').valueChanges();
  }
}
