import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BudgetService } from '../budget.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-budget-update',
  templateUrl: './budget-update.component.html',
  styleUrls: ['./budget-update.component.css']
})
export class BudgetUpdateComponent implements OnInit, OnDestroy {
  budgetForm!: FormGroup;
  data: any = {}; // Change data type to object
  dataSubscription!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    public budgetService: BudgetService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.dataSubscription = this.budgetService.getData(id).subscribe(
        data => {
          this.data = data[0]; // Assign the first item in the data array
          console.log(this.data);
          this.initializeForm();
        },
        error => {
          console.error('Error:', error);
        }
      );
    });
  }

  ngOnDestroy() {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }

  initializeForm() {
    this.budgetForm = this.formBuilder.group({
      budget_name: [this.data.budget_name, Validators.required],
      income_category_id: [this.data.income_category_id, Validators.required],
      user_id: [this.data.user_id, Validators.required],
      amount: [this.data.amount, Validators.required],
      always_notify: [this.data.always_notify],
    });
  }

  onSubmit() {
    console.log(this.budgetForm.value);
    const id = this.route.snapshot.params['id'];
    fetch(`http://localhost:8000/budget/update_budget_data/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.budgetForm.value)
    })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
}