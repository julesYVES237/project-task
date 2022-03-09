import {Component, OnInit, ViewChild} from '@angular/core';
import {TaskService} from '../../../services/task.service';
import {Task} from '../../../datamodels/task';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {AuthService} from '../../../services/auth.service';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-tasksuser',
  templateUrl: './tasksuser.component.html',
  styleUrls: ['./tasksuser.component.scss']
})
export class TasksuserComponent implements OnInit {


  ELEMENT_DATA: Task[];

  displayedColumns: string[] = ['description',
    'status', 'startDate', 'endDate', 'actions'];

  dataSource = new MatTableDataSource<Task>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private taskService: TaskService,
              private authService: AuthService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllEmployeeTask();
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public getAllEmployeeTask(): void {
    const resp = this.taskService.getEmployeeTasks(this.authService.getUserId());
    resp.subscribe(tasks => this.dataSource.data = tasks as Task[]);
  }

  completeTask(id: number): void {
    const resp = this.taskService.updateTask(id, 'DONE');
    resp.subscribe((value) => {
        this.getAllEmployeeTask();
        this.toastrService.success('You completed the Task!', 'Success', {
          timeOut: 2000,
        });
      },
      (error) => {
        this.toastrService.success('Error occured during completing task', 'Error', {
          timeOut: 2000,
        });
      },
    );
  }
}
