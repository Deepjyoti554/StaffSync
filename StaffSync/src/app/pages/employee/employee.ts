import { Component, inject, OnInit } from '@angular/core';
import { Master } from '../../services/master';
import { ParentDepartment } from '../../model/Employee';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee implements OnInit {
  masterSer = inject(Master);

  parentDepartmentData: ParentDepartment[] = [];

  ngOnInit(): void {
    this.masterSer.getParentDepartment().subscribe((res: ParentDepartment[]) => {
      console.log(res);
      this.parentDepartmentData = res;
    })
  }


}
