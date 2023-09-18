import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetManagementComponent } from './budget-management/budget-management.component';
import { BudgetAddComponent } from './budget-add/budget-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BudgetUpdateComponent } from './budget-update/budget-update.component';
import { BudgetService } from './budget.service';
import { BudgetViewComponent } from './budget-view/budget-view.component';
import { BudgetDetailViewComponent } from './budget-detail-view/budget-detail-view.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BudgetManagementComponent,
    BudgetAddComponent,
    BudgetUpdateComponent,
    BudgetViewComponent,
    BudgetDetailViewComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
