import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Employee} from '../datamodels/employee';
import {BaseurlService} from './baseurl.service';
import {Employeeuser} from '../datamodels/employeeuser';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  urlGet: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private httpClient: HttpClient,
              private baseurl: BaseurlService) {
    this.urlGet = baseurl.getBaseUrl() + '/employees';
  }

  public getEmployees(): any {
    return this.httpClient.get(this.urlGet);
  }

  public getAllEmployeesCount(): any {
    const url = this.urlGet + '/' + 'count';
    return this.httpClient.get(url);
  }

  public getAllEmployeesWagesCount(): any {
    const url = this.urlGet + '/' + 'wages';
    return this.httpClient.get(url);
  }

  public deleteEmployeesById(id: number): any {
    const urlDelete = this.urlGet + '/' + id.toString();
    return this.httpClient.delete(urlDelete);
  }

  addEmployee(employee: Employee): any {
    return this.httpClient.post(this.urlGet, employee);
  }

  updateEmployee(employee: Employee): any {
    const urlPut = this.urlGet + '/' + employee.id.toString();
    return this.httpClient.put(urlPut, employee);
  }

  updatePatchEmployee(employeeuser: Employeeuser): any {
    const urlPatch = this.urlGet + '/' + employeeuser.id.toString();
    this.httpClient.patch(urlPatch, employeeuser, this.httpOptions).subscribe(
      (value) => {
        console.log('Connection okey');
      },
      (error) => {
        console.log('Something went wrong');
      },
    );
  }
}
