import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {
  expenseForm: FormGroup;
  constructor(private expenseService: ExpenseService) {
    this.expenseForm = new FormGroup({
      amount: new FormControl('', [Validators.required]),
      category: new FormControl(''),
      subcategory: new FormControl(''),
      description: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }

  onAdd(): void {
    this.expenseService.addExpense(this.expenseForm.value);
    this.expenseForm.reset();
  }
}
