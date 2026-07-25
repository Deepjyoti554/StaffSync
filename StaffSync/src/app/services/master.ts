import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { childDepartment, Employees, ParentDepartment } from '../model/Employee';

@Injectable({
  providedIn: 'root',
})
export class Master implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getParentDepartment();
  }

  getParentDepartment() {
    return this.http.get<ParentDepartment[]>("https://6a5bf4d864f700df5bd7a2a5.mockapi.io/Departments")
  }

  getChildDepartments(id: number) {
    return this.http.get<childDepartment>(`https://6a5bf4d864f700df5bd7a2a5.mockapi.io/childDepartment/${id}`);
  }

  postEmployeesData(data: Employees) {
    return this.http.post<Employees>("https://6a5bf4d864f700df5bd7a2a5.mockapi.io/employees", data);
  }

  getEmployeesData() {
    return this.http.get<Employees[]>("https://6a5bf4d864f700df5bd7a2a5.mockapi.io/employees");
  }

  deleteEmployeesData(id: any) {
    return this.http.delete<Employees>(`https://6a5bf4d864f700df5bd7a2a5.mockapi.io/employees/${id}`);
  }
}
