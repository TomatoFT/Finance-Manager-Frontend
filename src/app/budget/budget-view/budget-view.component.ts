import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BudgetService } from '../../service/budget.service';
import { AuthService } from '../../service/auth.service';
import { Budget } from 'src/app/interface/budget';
import { Field } from 'src/app/interface/fields';

@Component({
  selector: 'app-budget-view',
  templateUrl: './budget-view.component.html',
  styleUrls: ['./budget-view.component.css']
})
export class BudgetViewComponent implements OnInit {
  budgets: Budget[] = [];
  fields: Field<Budget>[] = [
    { header: 'ID', property: 'id' },
    { header: 'Name', property: 'name' },
    { header: 'User', property: 'user' },
    { header: 'Income Category', property: 'income_category' },
    { header: 'Amount', property: 'amount' },
    { header: 'Date', property: 'date' },
  ];
  
  @Output() onGetBudgets: EventEmitter<void> = new EventEmitter();
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor(private budgetService: BudgetService, private authService: AuthService) {}

  ngOnInit(): void {
    this.getBudgets();
    console.log(this.budgets);
  }

  getBudgets(): void {
    this.onGetBudgets.emit()
    this.budgetService.getAllData().subscribe(
      budgets => {
        this.budgets = budgets;
        console.log('Budgets:', this.budgets);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  delete(id: number): void {
    this.onDelete.emit(id)
    if (confirm('Are you sure you want to delete?')) {
      fetch(`http://localhost:8000/budget/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.authService.getAccessToken()}`
        },
      })
        .then(result => {
          console.log('Success:', result);
          location.reload();
        })
    }
  }
}