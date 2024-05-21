import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../budget.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-budget-view',
  templateUrl: './budget-view.component.html',
  styleUrls: ['./budget-view.component.css']
})
export class BudgetViewComponent implements OnInit {
  budgets: any[] = [];

  constructor(private budgetService: BudgetService, private authService: AuthService) {}

  ngOnInit(): void {
    this.getBudgets();
  }

  getBudgets(): void {
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