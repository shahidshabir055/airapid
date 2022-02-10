import { Component, OnInit } from '@angular/core';
import { EmployeeFormComponent } from '../Employee-form/employee-form.component';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employees';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {
  name!: string;
  position!: string;
  about!: string;
  joiningDate!: string;
  emp!: Employee;
  constructor(private service: EmployeeService, public dialog: MatDialog) {
   }
  ngOnInit(): void {
    this.emp = this.service.getEmployee();
  }
  editCard(data: Employee): void{
    console.log(data.name);
    const dialogRef = this.dialog.open(EmployeeFormComponent, {
      width: '400px',
      data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.edit(result);
      }
    });
  }
}
