import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:9093/employee/';
  constructor(private http:HttpClient) { }
  getEmployeeList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'showallemployee');
  }
  createEmployee(employee: object): Observable<object> {
    console.log(employee);
    return this.http.post(`${this.baseUrl}`+'addemployee', employee);
  }
  getEmployeebyId(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/getemployeebyId/${id}`);
  }
  updateEmployee(employee: object):Observable<Object>{
  return this.http.post(`${this.baseUrl}/updateemployee/`, employee);
  }
  updateEmployeeaddtechskill(id :number,skill: object):Observable<Object>{
    return this.http.post(`${this.baseUrl}addemployeetechskill/${id}/`, skill);
    }
    updateEmployeedeletetechskill(id :number,skill: object):Observable<Object>{
      return this.http.post(`${this.baseUrl}deleteemployeetechskill/${id}/`, skill);
      }
      updateEmployeeaddnontechskill(id :number,skill: object):Observable<Object>{
        return this.http.post(`${this.baseUrl}addemployeenontechskill/${id}/`, skill);
        }
        updateEmployeedeletenontechskill(id :number,skill: object):Observable<Object>{
          return this.http.post(`${this.baseUrl}deleteemployeenontechskill/${id}/`, skill);
          }

}
