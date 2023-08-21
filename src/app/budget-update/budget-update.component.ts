import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BudgetService } from '../budget.service';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-budget-update',
  templateUrl: './budget-update.component.html',
  styleUrls: ['./budget-update.component.css']
})
export class BudgetUpdateComponent implements OnInit {
  budgetForm!: FormGroup;
  data: any[] = [];
  dataSubscription!: Subscription;

  constructor(private formBuilder: FormBuilder, 
              public budgetService: BudgetService,   
              private route: ActivatedRoute) {}

  ngOnInit() {
    // @Input() id?: Intl;
    // const id = 1; // Replace with the actual ID you want to retrieve
    this.route.params.subscribe(params => {
      const id = params['id']; 
  
    this.budgetService.getData(id)
      .subscribe({
        next: data => {
          this.data = data;
          console.log(this.data.values);
          this.initializeForm();
        },
        error: error => {
          console.error('Error:', error);
        }
      });
  })
}

  ngOnDestroy() {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }

  initializeForm() {
    this.budgetForm = this.formBuilder.group({
      budget_name: [this.data[0]?.budget_name, Validators.required],
      income_category_id: [this.data[0]?.income_category_id, Validators.required],
      user_id: [this.data[0]?.user_id, Validators.required],
      amount: [this.data[0]?.amount, Validators.required],
      always_notify: [this.data[0]?.always_notify],
    });
  }

  onSubmit() {
    console.log(this.budgetForm.value)
  }
}