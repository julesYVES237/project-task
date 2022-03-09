import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeService} from '../../../services/employee.service';
import {Employee} from '../../../datamodels/employee';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {DeleteEmpDialogComponent} from '../../../employee_dialogs/delete/delete-emp-dialog.component';
import {AddEmpDialogComponent} from '../../../employee_dialogs/add/add-emp-dialog.component';
import {UpdateEmpDialogComponent} from 'src/app/employee_dialogs/update/update-emp-dialog.component';
import {ToastrService} from 'ngx-toastr';


/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  ELEMENT_DATA: Employee[];
  displayedColumns: string[] = ['firstName', 'lastName',
    'email', 'salary', 'occupation', 'empAuthLevel', 'currentMonthWorkingHours',
    'remainingDayOffs', 'actions'];

  dataSource = new MatTableDataSource<Employee>(this.ELEMENT_DATA);


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private employeeService: EmployeeService,
              public dialog: MatDialog,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllEmployees();
  }

  getAllEmployees(): void {
    const resp = this.employeeService.getEmployees();
    resp.subscribe(employees => this.dataSource.data = employees as Employee[]);
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editDialogEmployee(id: number,
                     firstName: string,
                     lastName: string,
                     email: string,
                     salary: number,
                     occupation: string,
                     empAuthLevel: string,
                     currentMonthWorkingHours: number,
                     remainingDAyOffs: number
  ): void {

    const dialogRef = this.dialog.open(UpdateEmpDialogComponent, {
      data: {
        id,
        firstName, lastName, email, salary, occupation,
        empAuthLevel, currentMonthWorkingHours,
        remainingDAyOffs
      }
    });
    dialogRef.afterClosed().subscribe(result => {

      this.getAllEmployees();
    });
  }

  deleteDialogEmployee(id: number): void {
    const dialogRef = this.dialog.open(DeleteEmpDialogComponent, {data: {id}});

    dialogRef.afterClosed().subscribe(result => {
      this.getAllEmployees();
    });
  }

  addDialogEmployee(): void {
    const dialogRef = this.dialog.open(AddEmpDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.getAllEmployees();
    });
  }
}


