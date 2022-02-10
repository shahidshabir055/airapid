import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { employeeData } from './static/employeeList';
import { Employee } from './models/employees';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees$: BehaviorSubject<Employee[]>;
  employees: Array<Employee> = [];
  employeesList: Array<Employee> = [];
  employee!: any;
  findElem: any;
  constructor() {
  this.employees$ = new BehaviorSubject([] as any);
  this.employeesList = employeeData;
  if (!localStorage.getItem('employeesM')){
    localStorage.setItem('employeesM', JSON.stringify(this.employeesList));
  }
  }

  getAll(): void {
    const employeesAll = JSON.parse(localStorage.getItem('employeesM') || '{}');
    this.employees$.next(employeesAll);
  }
  AddItem(employee: Employee): void {
    const employeesAll = JSON.parse(localStorage.getItem('employeesM') || '{}');
    employeesAll.push(employee);
    localStorage.setItem('employeesM', JSON.stringify(employeesAll));
    this.employees$.next(employeesAll);
  }

  edit(employee: Employee): void {
    const employeesAll = JSON.parse(localStorage.getItem('employeesM') || '{}');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < employeesAll.length; i++) {
      if (employeesAll[i].name === employee.name) {
        employeesAll[i].name = employee.name;
        employeesAll[i].position = employee.position;
        employeesAll[i].about = employee.about;
        employeesAll[i].joiningDate = employee.joiningDate;
      }
   }
    localStorage.setItem('employeesM', JSON.stringify(employeesAll));
    this.employees$.next(employeesAll);
  }
  setEmployee(emp: Employee): void{
    this.employee = emp;
    this.employees$.next(this.employees);
    console.log(this.employee);
  }
  getEmployee(): Employee{
    const employeesAll = JSON.parse(localStorage.getItem('employeesM') || '{}');
    this.employees$.next(employeesAll);
    return this.employee;
  }
  remove(key: string): void {
    const employeesAll = JSON.parse(localStorage.getItem('employeesM') || '{}');
    for (let i = 0; i < employeesAll.length; i++) {
      if (employeesAll[i].name === key) {
          employeesAll.splice(i, 1);
      }
   }
      // Set New Todos
    localStorage.setItem('employeesM', JSON.stringify(employeesAll));
    this.employees$.next(employeesAll);
}

}
