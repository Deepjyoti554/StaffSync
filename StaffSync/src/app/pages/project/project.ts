import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { Component, ElementRef, inject, OnInit, viewChild } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Master } from '../../services/master';
import { EmployeeProject, Employees, Projects } from '../../model/Employee';
import { Console } from 'node:console';

@Component({
  selector: 'app-project',
  imports: [NgIf, ReactiveFormsModule, NgFor, AsyncPipe, FormsModule],
  templateUrl: './project.html',
  styleUrls: ['./project.css'],
})
export class Project implements OnInit {

  constructor() {
    this.intializeProjects();
    this.projectData$ = this.masterSer.getEmployeesData();
    console.log("Project Data: ", this.projectData$);
  }
  ngOnInit(): void {
    this.getProjectDetails();
  }

  //To open the model pop-up
  myModel = viewChild<ElementRef>('myModel');

  iscurrentView: string = "List";

  projectDetails: Projects[] = [];

  //Reactive form 
  projectForm: FormGroup = new FormGroup({});
  masterSer = inject(Master);

  //using observable to get the data from the service and bind it directly to the HTML using async pipe
  projectData$: Observable<Employees[]> = new Observable<Employees[]>();

  //Two way binding using ngModel in formModule
  employeeProjet: EmployeeProject = new EmployeeProject();

  employeeProjetList: EmployeeProject[] = [];

  intializeProjects(project?: Projects) {
    this.projectForm = new FormGroup<any>({
      projectId: new FormControl(project ? project.projectId : 0),
      projectName: new FormControl(project ? project.projectName : ''),
      clientName: new FormControl(project ? project.clientName : ''),
      startDate: new FormControl(project ? project.startDate : ''),
      leadByEmployeeId: new FormControl(project ? project.leadByEmployeeId : ''),
      contactPerson: new FormControl(project ? project.contactPerson : ''),
      contactNo: new FormControl(project ? project.contactNo : ''),
      emailId: new FormControl(project ? project.emailId : ''),
    });
  }

  onSaveProject() {
    const formStatus = this.projectForm.value;

    //Main logic of this project
    if (formStatus.projectId == 0) {
      const data = this.projectForm.value;
      this.masterSer.createProject(data).subscribe((res: any) => {
        alert("Project created successfully");
        this.getProjectDetails();
      }, error => {
        alert("Error while creating project");
      })
    }
    else {
      const data = this.projectForm.value;
      this.masterSer.updateProject(data).subscribe((res: any) => {
        alert("Project updated successfully");
        this.getProjectDetails();
      }, error => {
        alert("Error while updating project");
      })
    }
  }

  getProjectDetails() {
    this.masterSer.getProject().subscribe((res: Projects[]) => {
      this.projectDetails = res;
    })
  }

  onEdit(data: Projects) {
    console.log("Editing the project");

    this.intializeProjects(data);
    this.iscurrentView = 'Form';
  }

  onProjectEmployee(id: any) {
    //model calls signals and return ElementRef
    this.getAllEmployeeProject(id);
    const model = this.myModel();
    if (model) {
      model.nativeElement.style.display = 'block'
    }
  }

  onCloseModel() {
    const model = this.myModel();
    if (model) {
      model.nativeElement.style.display = 'none'
    }
  }

  onAddEmployeeProject() {
    this.masterSer.createEmployeeProject(this.employeeProjet).subscribe((res: any) => {
      alert("Project for Employee created successfully")
    })
  }

  getAllEmployeeProject(id: any) {
    this.masterSer.getEmployeeProject().subscribe((res: any) => {
      const record = res.filter((x: any) => x.employeeId == id);
      this.employeeProjetList = record;
      console.log("All Employee Project details: ", record);
    })
  }
} 
