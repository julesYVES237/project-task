import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EmployeeService} from '../../../services/employee.service';

@Component({
  selector: 'app-editprofiledialog',
  templateUrl: './editprofiledialog.component.html',
  styleUrls: ['./editprofiledialog.component.scss']
})
export class EditprofiledialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditprofiledialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
  }

  onNoClick(): any {
    this.dialogRef.close();
  }

  confirmEdit(): any {
    this.employeeService.updatePatchEmployee(this.data.employee);
    this.dialogRef.close();
  }

}
