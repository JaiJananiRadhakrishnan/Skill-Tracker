import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Skill } from '../skill';
@Component({
  selector: 'app-deletenontechnicalskilllist',
  templateUrl: './deletenontechnicalskilllist.component.html',
  styleUrls: ['./deletenontechnicalskilllist.component.css']
})
export class DeletenontechnicalskilllistComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }
  employee:Employee=new Employee();
  skill:Skill=new Skill();
  submitted=false;

  ngOnInit() {
  }
  employeesaveform=new FormGroup({
    employee_id:new FormControl('' , [Validators.required , Validators.minLength(3)] ),
    employee_techskilllist:new FormControl(),
    employee_nontechskilllist:new FormControl(),
    employee_techskilllist_value:new FormControl(),
    employee_nontechskilllist_value:new FormControl(),
  });
  SaveEmployee(){
    this.employee=new Employee(); 
    this.skill={"skillName": this.EmployeeNonTecSkillList.value, "competancyValue": this.EmployeeNonTechSkillListValue.value};
    this.submitted = true;
    this.save();
  }
  save() {
    console.log(this.employee);
    this.employeeService.updateEmployeedeletenontechskill(this.EmployeeId.value,this.EmployeeNonTecSkillList.value).subscribe(data => console.log(data), error => console.log(error));
  }
  get EmployeeTechnicalSkillList()
  {
    return this.employeesaveform.get('employee_techskilllist')
  }
  
  get EmployeeNonTecSkillList()
  {
    return this.employeesaveform.get('employee_nontechskilllist')
  }
  get EmployeeTechSkillListValue()
  {
    return this.employeesaveform.get('employee_techskilllist_value');
  }
  get EmployeeNonTechSkillListValue()
  {
    return this.employeesaveform.get('employee_nontechskilllist_value');
  }
  get EmployeeId(){
    return this.employeesaveform.get('employee_id');
  }
}

