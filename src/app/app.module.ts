import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './components/pages/login/login.component';
import { EmployeesComponent } from './components/pages/employees/employees.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { EmployeeDetailComponent } from './components/pages/employee-detail/employee-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { HiringComponent } from './components/pages/hiring/hiring.component';
import { HousingComponent } from './components/pages/housing/housing.component';
import { VisaStatusComponent } from './components/pages/visa-status/visa-status.component';
import { OnboardtableComponent } from './components/onboardtable/onboardtable.component';
import { ApplicationDetailComponent } from './components/pages/application-detail/application-detail.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'employee', component: EmployeesComponent},
  {path: 'employeeDetail/:employeeId', component: EmployeeDetailComponent},
  {path: 'housing', component: HousingComponent},
  {path: 'hiring', component: HiringComponent},
  {path: 'visa-status', component: VisaStatusComponent},
  {path: 'applicationDetail/:employeeId', component: ApplicationDetailComponent},
  {path: '**', component: ErrorComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LoginFormComponent,
    LoginComponent,
    EmployeesComponent,
    ErrorComponent,
    EmployeeDetailComponent,
    HeaderComponent,
    HiringComponent,
    HousingComponent,
    VisaStatusComponent,
    OnboardtableComponent,
    ApplicationDetailComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatTableModule,
    MatTabsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
