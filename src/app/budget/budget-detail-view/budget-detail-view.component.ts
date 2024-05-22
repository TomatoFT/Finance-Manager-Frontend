import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../service/budget.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-budget-detail-view',
  templateUrl: './budget-detail-view.component.html',
  styleUrls: ['./budget-detail-view.component.css']
})

export class BudgetDetailViewComponent implements OnInit {
  budget:any = {}

  constructor(private budgetService: BudgetService, 
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBudget()
  }

  getBudget(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(`id ${id}`);
    this.budgetService.getData(id)
      .subscribe(budget => {
        this.budget = budget[0];
        console.log(this.budget);
      });
  }

}