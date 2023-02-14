import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  constructor(private employeeService:EmployeeService){}
  employee:Employee=new Employee();
  submitted=false;

  ngOnInit() {
    this.submitted=false;
  }
  employeesaveform=new FormGroup({
    employee_id:new FormControl('' , [Validators.required , Validators.minLength(3)] ),
    employee_name:new FormControl('',[Validators.required,Validators.minLength(5)]),
    employee_department:new FormControl('',[Validators.required,Validators.minLength(5)]),
    employee_dob:new FormControl(),
    employee_techskilllist:new FormControl(),
    employee_nontechskilllist:new FormControl(),
    employee_techskilllist_value:new FormControl(),
    employee_nontechskilllist_value:new FormControl(),
  });
  SaveEmployee(){
    this.employee=new Employee(); 
    console.log(this.EmployeeId);
    console.log(this.EmployeeName);
    console.log(this.EmployeeDOB);
    console.log(this.EmployeeDepartment);
    console.log(this.EmployeeNonTecSkillList);
    console.log(this.EmployeeTechnicalSkillList);
    this.employee.employeeId=this.EmployeeId.value;
    this.employee.employeeName=this.EmployeeName.value;
    this.employee.employeeDepartment=this.EmployeeDepartment.value;
    this.employee.employeeDOB=this.EmployeeDOB.value;
    this.employee.technicalSkillList = [{"skillName": this.EmployeeTechnicalSkillList.value, "competancyValue": this.EmployeeTechSkillListValue.value}];
    this.employee.nonTechnicalSkillList = [{"skillName": this.EmployeeNonTecSkillList.value, "competancyValue": this.EmployeeNonTechSkillListValue.value}];
    this.submitted = true;
    this.save();
  }
  save() {
    console.log(this.employee);
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
  }

  get EmployeeId(){
    return this.employeesaveform.get('employee_id');
  }
  get EmployeeTechSkillListValue()
  {
    return this.employeesaveform.get('employee_techskilllist_value');
  }
  get EmployeeNonTechSkillListValue()
  {
    return this.employeesaveform.get('employee_nontechskilllist_value');
  }
  get EmployeeName(){
    return this.employeesaveform.get('employee_name');
  }
  get EmployeeDOB(){
    return this.employeesaveform.get('employee_dob');
  }
  get EmployeeDepartment(){
    return this.employeesaveform.get('employee_department');
  }
  get EmployeeTechnicalSkillList()
  {
    return this.employeesaveform.get('employee_techskilllist')
  }
  
  get EmployeeNonTecSkillList()
  {
    return this.employeesaveform.get('employee_nontechskilllist')
  }

  addEmployeeForm(){
    this.submitted=false;
    this.employeesaveform.reset();
  }

}

