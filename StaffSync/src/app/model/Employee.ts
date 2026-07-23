export class Employee {
    employeeId: number;
    employeeName: string;
    contactNo: string;
    emailId: string;
    password: string;
    deptId: number;
    gender: string;
    role: string;
    createdDate: Date;

    constructor() {
        this.employeeId = 1;
        this.employeeName = '';
        this.contactNo = '';
        this.emailId = '';
        this.deptId = 1;
        this.password = '';
        this.gender = '';
        this.role = '';
        this.createdDate = new Date();
    }
}

export interface ParentDepartment {
    departmentId: string;
    departmentName: string;
    departmentLogo: string;
}

export interface childDepartment {
    departmentId: number;
    ParentDepartmentId: number;
    departmentName: string;
}