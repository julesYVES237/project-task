import {Component, OnInit, ViewChild} from '@angular/core';
import {Task} from '../../../datamodels/task';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {TaskService} from '../../../services/task.service';
import {AuthService} from '../../../services/auth.service';
import {TaskAssigned} from '../../../datamodels/taskassigned';
import {MatDialog} from '@angular/material/dialog';
import {AssigntaskdialogComponent} from '../assigntaskdialog/assigntaskdialog.component';
import {AddtaskdialogComponent} from '../addtaskdialog/addtaskdialog.component';
import {DeletetaskdialogComponent} from '../deletetaskdialog/deletetaskdialog.component';
import {EdittaskdialogComponent} from '../edittaskdialog/edittaskdialog.component';

@Component({
  selector: 'app-tasksadmin',
  templateUrl: './tasksadmin.component.html',
  styleUrls: ['./tasksadmin.component.scss']
})
export class TasksadminComponent implements OnInit {

  constructor(private taskService: TaskService,
              private authService: AuthService,
              public dialog: MatDialog) {
  }

  ELEMENT_DATA_TA: TaskAssigned[];

  ELEMENT_DATA_TU: Task[];

  displayedColumnsTa: string[] = ['id', 'description',
    'status', 'startDate', 'endDate', 'employeeFirstName', 'employeeLastName', 'actions'];

  displayedColumnsTu: string[] = ['id', 'description',
    'status', 'startDate', 'endDate', 'actions'];


  dataSourceTa = new MatTableDataSource<TaskAssigned>(this.ELEMENT_DATA_TA);

  dataSourceTu = new MatTableDataSource<Task>(this.ELEMENT_DATA_TU);

  @ViewChild('firstPaginator', {static: true}) paginatorTa: MatPaginator;
  @ViewChild('table1', {read: MatSort, static: true}) sortTa: MatSort;


  @ViewChild('secondPaginator', {static: true}) paginatorTu: MatPaginator;
  @ViewChild('table2', {read: MatSort, static: true}) sortTu: MatSort;


  ngOnInit(): void {

    this.dataSourceTa.paginator = this.paginatorTa;
    this.dataSourceTu.paginator = this.paginatorTu;


    this.dataSourceTa.sort = this.sortTa;
    this.dataSourceTu.sort = this.sortTu;


    this.getAllassignedTasks();
    this.getAllUnassignedTasks();

  }

  applyFilterTa(filterValue: string): void {
    this.dataSourceTa.filter = filterValue.trim().toLowerCase();
  }

  applyFilterTu(filterValue: string): void {
    this.dataSourceTu.filter = filterValue.trim().toLowerCase();
  }


  private getAllassignedTasks(): void {
    const resp = this.taskService.getAllassignedTasks();
    resp.subscribe(tasks => this.dataSourceTa.data = tasks as TaskAssigned[]);
  }

  public getAllUnassignedTasks(): void {
    const resp = this.taskService.getAllUnassignedTasks();
    resp.subscribe(tasks => this.dataSourceTu.data = tasks as Task[]);
  }


  addNewTask(): void {
    const dialogRef = this.dialog.open(AddtaskdialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.getAllUnassignedTasks();
    });

  }

  assignTask(taskId: number): void {
    const dialogRef = this.dialog.open(AssigntaskdialogComponent, {data: {taskId}});
    dialogRef.afterClosed().subscribe(result => {
      this.getAllassignedTasks();
      this.getAllUnassignedTasks();
    });
  }

  unassignTask(id: number): void {
    const resp = this.taskService.changeTaskAssigment(id, false);
    resp.subscribe((value) => {
        this.getAllassignedTasks();
        this.getAllUnassignedTasks();
      },
      (error) => {
        alert('Connection Error!!' + error);
      },
    );
  }

  deleteTaskDialog(id: number): void {
    const dialogRef = this.dialog.open(DeletetaskdialogComponent, {data: {id}});
    dialogRef.afterClosed().subscribe(result => {
      this.getAllUnassignedTasks();
      this.getAllassignedTasks();
    });

  }

  editTaskDialog(id: number, description: string, status: string, startDate: string, endDate: string): void {
    const dialogRef = this.dialog.open(EdittaskdialogComponent, {
      data: {
        id,
        description, status, startDate, endDate
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllassignedTasks();
      this.getAllUnassignedTasks();
    });
  }
}
