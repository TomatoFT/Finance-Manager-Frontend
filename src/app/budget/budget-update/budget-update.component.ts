import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BudgetService } from '../../service/budget.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../service/auth.service';

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
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.dataSubscription = this.budgetService.getData(id).subscribe(
        data => {
          this.data = data[0]; // Assign the first item in the data array
          console.log(`Init Data is the ${JSON.stringify(this.data)}`);
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
    console.log(this.data);
    if (this.data) {
      this.budgetForm = this.formBuilder.group({
        name: [this.data.name, Validators.required],
        income_category: [this.data.income_category, Validators.required],
        amount: [this.data.amount, Validators.required],
        always_notify: [this.data.always_notify]
      });
    }
    console.log(JSON.stringify(this.budgetForm.value))
  }

  onSubmit() {
    console.log(`The data is ${JSON.stringify(this.budgetForm.value)}`);
    const id = this.route.snapshot.params['id'];
    fetch(`http://localhost:8000/budget/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getAccessToken()}`
      },
      body: JSON.stringify(this.budgetForm.value)
    })
      .then(result => {
        console.log('Success:', result);
        location.reload();
      }
      )
      .catch(error => {
        console.error('Error:', error);
      });
  }
}