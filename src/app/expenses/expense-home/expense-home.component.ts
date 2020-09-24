import { Component, Input, OnInit } from '@angular/core';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-expense-home',
  templateUrl: './expense-home.component.html',
  styleUrls: ['./expense-home.component.scss']
})
export class ExpenseHomeComponent implements OnInit {
  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.expenseService.get().subscribe(console.log);
  }

  saveData(): void {
    this.expenseService.save().subscribe();
  }

  getData(): void {
    this.expenseService.get().subscribe(console.log);
  }

}
