import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AdminEmail} from './../../models/admin-email';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token') + ''
  })
};

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  url = 'https://localhost:8443/mail';

  constructor(private http: HttpClient) {
  }

  public all(): Observable<AdminEmail[]> {
    return this.http.get<AdminEmail[]>(this.url + '/', httpOptions);
  }

  public one(id: number): Observable<AdminEmail> {
    return this.http.get<AdminEmail>(this.url + '/' + id, httpOptions);
  }

  public create(categorie: AdminEmail): Observable<AdminEmail> {
    return this.http.post<AdminEmail>(this.url + '/', categorie, httpOptions);
  }

  public update(categorie: AdminEmail): Observable<AdminEmail> {
    return this.http.put<AdminEmail>(this.url + '/', categorie, httpOptions);
  }

  public delete(idCategorie: number | undefined): Observable<void> {
    return this.http.delete<void>(this.url + '/' + idCategorie, httpOptions);
  }

}
