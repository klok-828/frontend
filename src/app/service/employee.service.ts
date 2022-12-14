import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { EmployeeResponse } from 'src/interface/EmployeeResponse';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:9000/employee-service/employees';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<[]> {

    // const headers = new HttpHeaders()
    // .set('Authroization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMSIsInBlcm1pc3Npb25zIjpbeyJhdXRob3JpdHkiOiJkZWxldGUifSx7ImF1dGhvcml0eSI6InVwZGF0ZSJ9LHsiYXV0aG9yaXR5IjoiaHIifSx7ImF1dGhvcml0eSI6ImNyZWF0ZSJ9LHsiYXV0aG9yaXR5IjoicmVhZCJ9XX0.hoifWOsa6Sb-sp1GMv6EnySiO7xBrCfHDzxCQ0h3hmc');

    return this.http.get<[]>("https://jsonplaceholder.typicode.com/users");

    // console.log(headers);
    // return this.http.get<[]>("http://localhost:8080/employees", { 'headers': headers })
    // .pipe(map(data => Object.keys(data).map(key => data[key])))
    // .subscribe((user) => { console.log(user) });
  }

  getEmployeeById(id): Observable<Object> {
    return this.http.get<Object>(`"https://jsonplaceholder.typicode.com/users/${id}"`);
  }
}
