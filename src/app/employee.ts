import { Skill } from './skill';

export class Employee {
    employeeId:number;
    employeeName:String;
    employeeDOB:Date;
    employeeDepartment:String;
    nonTechnicalSkillList:Array<Skill>;
    technicalSkillList:Array<Skill>
}
