import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {TaskService} from '../../../services/task.service';
import {EmployeeService} from '../../../services/employee.service';

@Component({
  selector: 'app-dashboardadmin',
  templateUrl: './dashboardadmin.component.html',
  styleUrls: ['./dashboardadmin.component.scss']
})
export class DashboardadminComponent implements OnInit {
  public LoadScript(url:string){
    const body =<HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML='';
    script.src=url;
    script.async=true;
    script.defer=true;
    body.appendChild(script);
}
public LoadScript2(url:string){
  const body =<HTMLDivElement> document.body;
  const script = document.createElement('script');
  script.innerHTML='';
  script.src=url;
  script.async=true;
  script.defer=true;
  body.appendChild(script);
}
  constructor(public authService: AuthService,
              private taskService: TaskService,
              private employeeService: EmployeeService) {
  }

  noOfAllTasks: any;
  noOfAssingnedTasks: any;
  noOfUnassingnedTasks: any;
  noOfDoneTasks: any;
  noOfNewTasks: any;

  employeeCount: any;
  employeeWagesCount: any;

  ngOnInit(): void {
    this.LoadScript('../../../../assets/dist/js/date.js');
    this.LoadScript2('../../../../assets/dist/js/pages/jar.js');
    this.taskService.getAllTasksCount().subscribe(data => this.noOfAllTasks = data);
    this.taskService.getAllATasksCount().subscribe(data => this.noOfAssingnedTasks = data);
    this.taskService.getAllUnATasksCount().subscribe(data => this.noOfUnassingnedTasks = data);
    this.taskService.getAllDoneTasksCount().subscribe(data => this.noOfDoneTasks = data);
    this.taskService.getAllNewTasksCount().subscribe(data => this.noOfNewTasks = data);

    this.employeeService.getAllEmployeesCount().subscribe(data => this.employeeCount = data);
    this.employeeService.getAllEmployeesWagesCount().subscribe(data => this.employeeWagesCount = data);


  }

}
