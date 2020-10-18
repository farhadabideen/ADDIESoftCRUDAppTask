import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './Employees/Employees.component';
import { EmployeeComponent } from './Employee/Employee.component';
import { EmployeeAddEditComponent } from './Employee-add-edit/Employee-add-edit.component';

const routes: Routes = [
  { path: '', component: EmployeesComponent, pathMatch: 'full' },
  { path: 'Employee/:id', component: EmployeeComponent },
  { path: 'add', component: EmployeeAddEditComponent },
  { path: 'Employee/edit/:id', component: EmployeeAddEditComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
