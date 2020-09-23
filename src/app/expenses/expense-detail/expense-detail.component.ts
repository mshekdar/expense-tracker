import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Expense } from '../models/expense.model';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.scss']
})
export class ExpenseDetailComponent implements OnInit {
  expense: Expense;
  constructor(private activatedRoute: ActivatedRoute, private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const expenseId = params['id'];
      this.expense = this.expenseService.getExpense(+expenseId);
    });
  }

}
