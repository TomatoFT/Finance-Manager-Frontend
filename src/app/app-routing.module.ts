import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetAddComponent } from './budget-add/budget-add.component';
import { BudgetUpdateComponent } from './budget-update/budget-update.component';

const routes: Routes = [
  { path: '', component: BudgetAddComponent },
  { path: 'update/:id', component: BudgetUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
