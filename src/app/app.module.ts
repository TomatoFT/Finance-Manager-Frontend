import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetManagementComponent } from './budget/budget-management/budget-management.component';
import { BudgetAddComponent } from './budget/budget-add/budget-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BudgetUpdateComponent } from './budget/budget-update/budget-update.component';
import { BudgetService } from './budget.service';
import { BudgetViewComponent } from './budget/budget-view/budget-view.component';
import { BudgetDetailViewComponent } from './budget/budget-detail-view/budget-detail-view.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { TokenRefreshComponent } from './token-refresh/token-refresh.component';
import { LogoutComponent } from './logout/logout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    BudgetManagementComponent,
    BudgetAddComponent,
    BudgetUpdateComponent,
    BudgetViewComponent,
    BudgetDetailViewComponent,
    LoginComponent,
    TokenRefreshComponent,
    LogoutComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,    
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }