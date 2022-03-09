import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EmployeeService} from '../../services/employee.service';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-delete',
  templateUrl: './delete-emp-dialog.component.html',
  styleUrls: ['./delete-emp-dialog.component.scss']
})
export class DeleteEmpDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteEmpDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private employeeService: EmployeeService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.employeeService.deleteEmployeesById(this.data.id).subscribe(
      (value) => {
        this.toastrService.success('Employee Successfully Deleted!', 'Success', {
          timeOut: 2000,
        });
      },
      (error) => {
        this.toastrService.error('Connection Error during deleting employee.', 'Error', {
          timeOut: 2000,
        });
      }
    );

    this.dialogRef.close();

  }
}
