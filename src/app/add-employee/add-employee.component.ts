import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from '../models/employees';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  data: any;
  formInstance: FormGroup;
  constructor(public dialogRef: MatDialogRef<AddEmployeeComponent>, private service: EmployeeService,
              private fb: FormBuilder) {
    this.formInstance = this.fb.group({
      name: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      about: new FormControl('', Validators.required),
      joiningDate: new FormControl('', Validators.required),
    });
    this.data = this.formInstance.value;
  }

  ngOnInit(): void {
  }
  save(): void {
    this.service.AddItem(this.formInstance.value);
    this.dialogRef.close();
  }

}
