import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
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
  expense: Expense;
  constructor(
    private expenseService: ExpenseService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

    this.expenseForm = new FormGroup({
      amount: new FormControl('', [Validators.required]),
      category: new FormControl(''),
      subcategory: new FormControl(''),
      description: new FormControl(''),
    });

    this.activatedRoute.params.pipe(
      switchMap((params) => {
        const expenseId = params['id'];
        return expenseId ? this.expenseService.getExpenseById(expenseId) : of(null);
      })
    ).subscribe((expense) => {
      if (expense) {
        this.mode = 'edit';
        this.expense = expense;
        this.expenseForm.patchValue({...expense})
      }
    })
  }

  ngOnInit(): void {
  }

  onAdd(): void {
    this.expenseService.addExpense(this.expenseForm.value).then((res) => {
      console.log('Add success', res);
    });
    this.expenseForm.reset();
  }

  onSave(): void {
    this.expenseService.updateExpense(this.expense.id, this.expenseForm.value).then(() => {
      console.log('Update success');
    });
    this.router.navigateByUrl('/expenses/' + this.expense.id)
  }
}
