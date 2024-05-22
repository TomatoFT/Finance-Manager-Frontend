import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetAddComponent } from './budget/budget-add/budget-add.component';
import { BudgetUpdateComponent } from './budget/budget-update/budget-update.component';
import { BudgetViewComponent } from './budget/budget-view/budget-view.component';
import { BudgetDetailViewComponent } from './budget/budget-detail-view/budget-detail-view.component';
import { LoginComponent } from './auth/login/login.component';
import { TokenRefreshComponent } from './auth/token-refresh/token-refresh.component';
import { LogoutComponent } from './auth/logout/logout.component';

const routes: Routes = [
  { path: 'budget/add', component: BudgetAddComponent },
  { path: 'budget/update/:id', component: BudgetUpdateComponent },
  { path: 'budget', component: BudgetViewComponent},
  { path: 'budget/:id', component: BudgetDetailViewComponent },
  { path: 'auth/refresh', component: TokenRefreshComponent},
  { path: 'auth/logout', component: LogoutComponent},
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
