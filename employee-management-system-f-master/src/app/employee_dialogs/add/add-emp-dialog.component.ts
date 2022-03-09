import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../datamodels/employee';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add-emp-dialog.component.html',
  styleUrls: ['./add-emp-dialog.component.scss']
})
export class AddEmpDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddEmpDialogComponent>,
              private employeeService: EmployeeService,
              private toastrService: ToastrService) {
  }

  employee: Employee;
  hide = true;

  ngOnInit(): void {
    this.employee = new Employee();
    this.employee.id = 0;
    this.employee.firstName = '';
    this.employee.lastName = '';
    this.employee.email = '';
    this.employee.password = '';
    this.employee.occupation = '';
    this.employee.empAuthLevel = 'ROLE_USER';
    this.employee.currentMonthWorkingHours = 168;
    this.employee.remainingDayOffs = 22;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmAdd(): void {
    this.employeeService.addEmployee(this.employee).subscribe(
      (value) => {
        this.toastrService.success('Employee Successfully Created!', 'Success', {
          timeOut: 2000,
        });
      },
      (error) => {
        this.toastrService.error('Connection Error during creating employee.', 'Error', {
          timeOut: 2000,
        });
      }
    );
    this.dialogRef.close();
  }

  submit(): void {

  }
}
