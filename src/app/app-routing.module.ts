import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import { LoginComponent } from './login/login.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { ShowAllEmployeeComponent } from './show-all-employee/show-all-employee.component';
import { AddtechnicalskilllistComponent } from './addtechnicalskilllist/addtechnicalskilllist.component';
import { AddnontechnicalskilllistComponent } from './addnontechnicalskilllist/addnontechnicalskilllist.component';
import { DeletetechnicalskilllistComponent } from './deleteemptechnicalskilllist/deletetechnicalskilllist.component';
import { DeletenontechnicalskilllistComponent } from './deletenontechnicalskilllist/deletenontechnicalskilllist.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'view-employee',
    pathMatch:'full'
  },
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',component: LoginComponent},
  { path: 'view-employee', component: ShowAllEmployeeComponent },
  { path: 'add-employee', component: EmployeeAddComponent },
  { path:'add-employee-techskilllist',component:AddtechnicalskilllistComponent},
  { path:'add-employee-nontechskilllist',component:AddnontechnicalskilllistComponent},
  { path:'delete-employee-techskilllist',component:DeletetechnicalskilllistComponent},
  { path:'delete-employee-nontechskilllist',component:DeletenontechnicalskilllistComponent}
];
@NgModule({
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
