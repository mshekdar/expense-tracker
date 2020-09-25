import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Expense } from '../models/expense.model';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {
  expenseForm: FormGroup;
  mode: string = 'add';
  constructor(private expenseService: ExpenseService, private activatedRoute: ActivatedRoute) {

    this.expenseForm = new FormGroup({
      amount: new FormControl('', [Validators.required]),
      category: new FormControl(''),
      subcategory: new FormControl(''),
      description: new FormControl(''),
    });

    this.activatedRoute.params.pipe(
      switchMap((params) => {
        const expenseId = params['id'];
        return expenseId ? this.expenseService.getExpenseById(expenseId) : null;
      })
    ).subscribe((expense) => {
      if (expense) {
        this.mode = 'edit';
        this.expenseForm.setValue({
          amount: expense.amount,
          category: expense.category,
          subcategory: expense.subcategory,
          description: expense.description
        })
      }
    })
  }

  ngOnInit(): void {
  }

  onAdd(): void {
    this.expenseService.addExpense(this.expenseForm.value);
    this.expenseForm.reset();
  }
}
