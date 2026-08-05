import { DatePipe } from "@angular/common";
import { FormControl } from "@angular/forms";

export class Employees {
    employeeId: string;
    employeeName: string;
    contactNo: string;
    emailId: string;
    password: string;
    deptId: number;
    gender: string;
    role: string;
    createdDate: Date;

    constructor() {
        this.employeeId = '';
        this.employeeName = '';
        this.contactNo = '';
        this.emailId = '';
        this.deptId = 1;
        this.password = '';
        this.gender = '';
        this.role = 'Employee';
        this.createdDate = new Date();
    }
}

export interface ParentDepartment {
    departmentId: string;
    departmentName: string;
    departmentLogo: string;
}

export interface childDepartmentData {
    childDepartmentId: string,
    parentDepartmentId: string,
    departmentName: string
}

export interface childDepartment {
    message: string,
    result: boolean,
    data: childDepartmentData[]
}

export interface Projects {
    projectId: string,
    projectName: string,
    clientName: string,
    startDate: string,
    leadByEmployeeId: string,
    contactPerson: string,
    contactNo: string,
    emailId: string,
}

export class EmployeeProject {
    projectId: number;
    employeeId: string;
    assignedDate: Date;
    role: string;
    isActive: boolean;
    empProjectId: string;

    constructor() {
        this.projectId = 0;
        this.employeeId = "";
        this.assignedDate = new Date();
        this.role = "";
        this.isActive = false;
        this.empProjectId = "";

    }


}
