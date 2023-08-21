import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-budget-add',
  templateUrl: './budget-add.component.html',
  styleUrls: ['./budget-add.component.css']
})
export class BudgetAddComponent implements OnInit {
  budgetForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.budgetForm = this.formBuilder.group({
      budget_name: ['', Validators.required],
      income_category_id: ['', Validators.required],
      user_id: ['', Validators.required],
      amount: [0, Validators.required],
      always_notify: [true],
    });
  }

  onSubmit() {
    // Handle form submission here
    console.log(this.budgetForm.value);
    fetch('http://localhost:8000/budget/add_budget_data', {
    method: 'POST',
    mode: "cors",
    credentials: "include",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(this.budgetForm.value)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Response:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
    }
}