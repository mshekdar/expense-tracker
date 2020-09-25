import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { distinctUntilChanged, filter, find, map } from 'rxjs/operators';
import { Expense } from "../models/expense.model"

@Injectable({ providedIn: 'root' })
export class ExpenseService {

  expenseCollection: AngularFirestoreCollection<Expense>;
  allExpenses$: Observable<Expense[]>;

  constructor(private fireStore: AngularFirestore) {

    this.expenseCollection = this.fireStore.collection<Expense>('expenses');

    this.allExpenses$ = this.expenseCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((expense) => {
          const returnObj = expense.payload.doc.data();
          returnObj.id = expense.payload.doc.id;
          return returnObj;
        })
      })
    );

  }

  getAllExpenses(): Observable<Expense[]> {
    return this.allExpenses$;
  }

  getExpenseById(id: string): Observable<Expense> {
    return this.allExpenses$.pipe(
      map(expenses => {
        return expenses.find(exp => exp.id === id)
      }),
      distinctUntilChanged()
    )
  }

  addExpense(expense: Expense): void {
    this.expenseCollection.add(expense);
  }

}
