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