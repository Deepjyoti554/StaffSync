import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ParentDepartment } from '../model/Employee';

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

}
