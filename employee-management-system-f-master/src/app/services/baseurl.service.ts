import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseurlService {

  baseURL: string;

  constructor() {

    //this.baseURL = 'https://employ2es.herokuapp.com';
     this.baseURL="https://spring-ems1.herokuapp.com/";
  }

  getBaseUrl(): any {
    return this.baseURL;
  }
}
