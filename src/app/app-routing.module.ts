import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetAddComponent } from './budget-add/budget-add.component';
import { BudgetUpdateComponent } from './budget-update/budget-update.component';
import { BudgetViewComponent } from './budget-view/budget-view.component';
import { BudgetDetailViewComponent } from './budget-detail-view/budget-detail-view.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'budget', component: BudgetAddComponent },
  { path: 'update/:id', component: BudgetUpdateComponent },
  { path: 'views', component: BudgetViewComponent},
  { path: 'views/:id', component: BudgetDetailViewComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
