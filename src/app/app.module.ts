import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetManagementComponent } from './budget/budget-management/budget-management.component';
import { BudgetAddComponent } from './budget/budget-add/budget-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BudgetUpdateComponent } from './budget/budget-update/budget-update.component';
import { BudgetService } from './service/budget.service';
import { BudgetViewComponent } from './budget/budget-view/budget-view.component';
import { BudgetDetailViewComponent } from './budget/budget-detail-view/budget-detail-view.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { TokenRefreshComponent } from './auth/token-refresh/token-refresh.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SignupComponent } from './auth/signup/signup.component';
import { ManagementTableComponent } from './components/management-table/management-table.component';
import { NotificationComponent } from './notification/notification.component';
import { UserComponent } from './user/user.component';

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
    SignupComponent,
    ManagementTableComponent,
    NotificationComponent,
    UserComponent,
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
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }