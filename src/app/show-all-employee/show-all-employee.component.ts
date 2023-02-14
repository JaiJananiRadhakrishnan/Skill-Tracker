import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Observable,Subject } from "rxjs";
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
@Component({
  selector: 'app-show-all-employee',
  templateUrl: './show-all-employee.component.html',
  styleUrls: ['./show-all-employee.component.css']
})
export class ShowAllEmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }
  employeesArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();
  employeeList:Observable<Employee[]>;
   employee:Employee=new Employee();
   deleteMessage=false;
   emplist:any;
   isupdated = false;
   submitted=false;  
  ngOnInit() {
    this.isupdated=false;
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true,
    
    
  };
  this.employeeService.getEmployeeList().subscribe(data =>{
    this.employeeList =data;
    this.dtTrigger.next();
    })

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
    // this.employee.employee_techskill=this.EmployeeTechnicalSkillList.value;
    // this.employee.employee_nontechskill=this.EmployeeNonTecSkillList.value;
    this.employee.technicalSkillList = [{"skillName": this.EmployeeTechnicalSkillList.value, "competancyValue": this.EmployeeTechSkillListValue.value}];
    console.log("this.employee.technicalSkillList>>>>>>>>>>>>>>>>>>>>>>>>>>>"+this.employee.technicalSkillList)
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
}