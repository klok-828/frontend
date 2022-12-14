import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';

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
const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'employee', component: EmployeesComponent},
  {path: 'employeeDetail/:employeeId', component: EmployeeDetailComponent},
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
  ],
  imports: [
    MatPaginatorModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
