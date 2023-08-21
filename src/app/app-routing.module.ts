import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetAddComponent } from './budget-add/budget-add.component';

const routes: Routes = [
  { path: '', component: BudgetAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
