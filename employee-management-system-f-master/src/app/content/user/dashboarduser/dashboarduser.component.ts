import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import {TaskService} from '../../../services/task.service';
import {ToastrService} from 'ngx-toastr';
import { __await } from 'tslib';

@Component({
  selector: 'app-dashboarduser',
  templateUrl: './dashboarduser.component.html',
  styleUrls: ['./dashboarduser.component.scss']
})
export class DashboarduserComponent implements OnInit {

  constructor(public authService: AuthService,
    private toastrService: ToastrService,
              private taskService: TaskService) {
  }

  noOfAllTasks: any;
  noOfNewTasks: any;
  noOfDoneTasks: any;

  async ngOnInit(): Promise <void> {
    this.taskService.getEmployeeTasksAll(this.authService.getUserId()).subscribe(data => this.noOfAllTasks = data);
    this.taskService.getEmployeeTasksDone(this.authService.getUserId()).subscribe(data => this.noOfDoneTasks = data);
    this.taskService.getEmployeeTasksNew(this.authService.getUserId()).subscribe(data => this.noOfNewTasks = data);
    
    
    var n = await(this.taskService.getEmployeeTasksNew)
    console.log(n)
    if(n != null){
      this.toastrService.success('Look if you have a new task ', 'Hello', {
        timeOut: 2000,
       
      });
    }
  }

}
