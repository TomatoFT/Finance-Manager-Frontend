import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-budget-add',
  templateUrl: './budget-add.component.html',
  styleUrls: ['./budget-add.component.css']
})
export class BudgetAddComponent implements OnInit {
  budgetForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router
              ) { }

  ngOnInit() {
    this.budgetForm = this.formBuilder.group({
      name: ['', Validators.required],
      income_category: ['', Validators.required],
      amount: [0, Validators.required],
      always_notify: [true],
    });
  }

  onSubmit() {
    fetch('http://localhost:8000/budget/', {
    method: 'POST',
    mode: "cors",
    credentials: "include",
    headers: {
      'Content-Type': 'application/json', 
      "Authorization": "Bearer " + this.authService.getAccessToken(),
    },
    body: JSON.stringify(this.budgetForm.value)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Response:', data);
      location.reload();
    }).then()
    .catch(error => {
      console.error('Error:', error);
    });
    }
    refreshPage() {
  // Navigates to the current route to refresh the page
  this.router.navigateByUrl('/budget', { skipLocationChange: true }).then(() => {
    this.router.navigate([this.router.url]);
  });
}
}