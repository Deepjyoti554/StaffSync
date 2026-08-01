import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Master } from '../../services/master';
import { Employees } from '../../model/Employee';

@Component({
  selector: 'app-project',
  imports: [NgIf, ReactiveFormsModule, NgFor, AsyncPipe],
  templateUrl: './project.html',
  styleUrls: ['./project.css'],
})
export class Project {

  constructor() {
    this.intializeProjects();
    this.projectData$ = this.masterSer.getEmployeesData();
    console.log("Project Data: ", this.projectData$);
  }

  iscurrentView: string = "List";

  //Reactive form 
  projectForm: FormGroup = new FormGroup({});
  masterSer = inject(Master);

  //using observable to get the data from the service and bind it directly to the HTML using async pipe
  projectData$: Observable<Employees[]> = new Observable<Employees[]>();

  intializeProjects() {
    this.projectForm = new FormGroup<any>({
      projectId: new FormControl(0),
      projectName: new FormControl(''),
      clientName: new FormControl(''),
      startDate: new FormControl(''),
      leadByEmployeeId: new FormControl(''),
      contactPerson: new FormControl(''),
      contactNo: new FormControl(''),
      emailId: new FormControl(''),
    });
  }
} 
