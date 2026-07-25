import { Component, inject, OnInit } from '@angular/core';
import { Master } from '../../services/master';
import { childDepartment, Employees, ParentDepartment } from '../../model/Employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  imports: [CommonModule, FormsModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee implements OnInit {
  masterSer = inject(Master);

  parentDepartmentData: ParentDepartment[] = [];

  childDepartmentData: childDepartment = {
    message: "",
    result: true,
    data: []
  };

  employeeObj = new Employees();

  selectDepartmentId: any;

  employeeDetails: Employees[] = [];

  ngOnInit(): void {
    this.masterSer.getParentDepartment().subscribe((res: ParentDepartment[]) => {
      console.log(res);
      this.parentDepartmentData = res;
    })

    this.masterSer.getEmployeesData().subscribe((res: Employees[]) => {
      console.log("Employee Details", res);
      this.employeeDetails = res;
    })
  }

  onDepartmentId(id: any) {
    this.selectDepartmentId = id;
    this.masterSer.getChildDepartments(this.selectDepartmentId).subscribe((res: childDepartment) => {
      this.childDepartmentData = res;
    })
  }

  onClick() {
    console.log(this.employeeObj);
    this.masterSer.postEmployeesData(this.employeeObj).subscribe((res: Employees) => {
      alert("successfully submitted employee data")
    })
  }

}
