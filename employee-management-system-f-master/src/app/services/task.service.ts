import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BaseurlService} from './baseurl.service';
import {Taskoperation} from '../datamodels/taskoperation';
import {Task} from '../datamodels/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  };

  basicUrl: string;

  constructor(private httpClient: HttpClient,
              private baseurl: BaseurlService) {
    this.basicUrl = baseurl.getBaseUrl();

  }

  public getAllTasks(): any {
    const url = this.basicUrl + '/' + 'tasks';
    return this.httpClient.get(url);
  }

  public getAllTasksCount(): any {
    const url = this.basicUrl + '/' + 'tasks' + '/' + 'count';
    return this.httpClient.get(url);
  }

  public getAllUnATasksCount(): any {
    const url = this.basicUrl + '/' + 'tasks' + '/' + 'unassigned' + '/' + 'count';
    return this.httpClient.get(url);
  }

  public getAllATasksCount(): any {
    const url = this.basicUrl + '/' + 'tasks' + '/' + 'assigned' + '/' + 'count';
    return this.httpClient.get(url);
  }

  public getAllDoneTasksCount(): any {
    const url = this.basicUrl + '/' + 'tasks' + '/' + 'done';
    return this.httpClient.get(url);
  }

  public getAllNewTasksCount(): any {
    const url = this.basicUrl + '/' + 'tasks' + '/' + 'new';
    return this.httpClient.get(url);
  }

  public getEmployeeTasks(empID: number): any {
    const url = this.basicUrl + '/' + 'employees' + '/' + empID + '/' + 'tasks';
    return this.httpClient.get(url);
  }

  public getEmployeeTasksDone(empID: number): any {
    const url = this.basicUrl + '/' + 'employees' + '/' + empID + '/' + 'tasks' + '/' + 'done';
    return this.httpClient.get(url);
  }

  public getEmployeeTasksNew(empID: number): any {
    const url = this.basicUrl + '/' + 'employees' + '/' + empID + '/' + 'tasks' + '/' + 'new';
    return this.httpClient.get(url);
  }

  public getEmployeeTasksAll(empID: number): any {
    const url = this.basicUrl + '/' + 'employees' + '/' + empID + '/' + 'tasks' + '/' + 'all';
    return this.httpClient.get(url);
  }

  public getAllUnassignedTasks(): any {
    const url = this.basicUrl + '/' + 'tasks' + '/' + 'unassigned';
    return this.httpClient.get(url);
  }

  public getAllassignedTasks(): any {
    const url = this.basicUrl + '/' + 'tasks' + '/' + 'tasksdto';
    return this.httpClient.get(url);
  }

  public updateTask(taskId: number, operation: string): any {
    const url = this.basicUrl + '/' + 'tasks' + '/' + taskId;
    const taskoperation = new Taskoperation();
    taskoperation.status = 'DONE';
    return this.httpClient.patch(url, taskoperation);
  }

  public updateCompleteTask(task: Task): any {
    const url = this.basicUrl + '/' + 'tasks' + '/' + task.id.toString();
    this.httpClient.put(url, task).subscribe(
      (value) => {
        console.log('Received value: ', value);
      },
      (error) => {
        console.log('Error!!', error);
      },
      () => {
        console.log('end of values');
      });
  }

  changeTaskAssigment(taskId: number, assign: boolean): any {
    const url = this.basicUrl + '/' + 'tasks' + '/' + taskId;
    return this.httpClient.patch(url, {'assigned': assign});
  }

  assignTask(taskId: number, employeeId: number): any {
    const url = this.basicUrl + '/' + 'tasks' + '/' + taskId;
    return this.httpClient.patch(url, {'employeeId': employeeId});
  }

  addTask(task: Task): any {
    const url = this.basicUrl + '/' + 'tasks';
    this.httpClient.post(url, task).subscribe(
      (value) => {
        console.log('Received value: ', value);
      },
      (error) => {
        console.log('Error!!', error);
      },
      () => {
        console.log('end of values');
      });
  }

  deleteTaskById(id: any): any {
    const url = this.basicUrl + '/' + 'tasks' + '/' + id.toString();
    console.log('Delete link  is as follows: ' + url);
    this.httpClient.delete(url).subscribe(
      (value) => {
        console.log('Received value: ', value);
      },
      (error) => {
        console.log('Error!!', error);
      },
      () => {
        console.log('end of values');
      }
    );
  }
}
