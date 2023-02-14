import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';
import { LoginComponent } from './login/login.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { ShowAllEmployeeComponent } from './show-all-employee/show-all-employee.component';
import { AddtechnicalskilllistComponent } from './addtechnicalskilllist/addtechnicalskilllist.component';
import { AddnontechnicalskilllistComponent } from './addnontechnicalskilllist/addnontechnicalskilllist.component';
import { DeletetechnicalskilllistComponent } from './deleteemptechnicalskilllist/deletetechnicalskilllist.component';
import { DeletenontechnicalskilllistComponent } from './deletenontechnicalskilllist/deletenontechnicalskilllist.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeAddComponent,
    LoginComponent,
    ShowAllEmployeeComponent,
    AddtechnicalskilllistComponent,
    AddnontechnicalskilllistComponent,
    DeletetechnicalskilllistComponent,
    DeletenontechnicalskilllistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
