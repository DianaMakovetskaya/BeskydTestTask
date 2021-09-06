import {Component, OnInit} from '@angular/core';
import {UniversityService} from "./university.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'universityProject';
  groups:any[];
  faculty_id:number;
  group_id:number;
  students:any[];
  showStudents:boolean;
  constructor(private universityService: UniversityService) {
  }

  ngOnInit(): void {
    this.showStudents = false;
  }

  getFacultyId(id: number): void {
    this.faculty_id = id;
    this.showStudents = false;
    this.universityService.getGroupsByFaculty(id).subscribe(value => this.groups = value);
  }

  getGroupId(id: number) {
    this.showStudents = true;
    this.group_id = id;
    this.universityService.getStudentsByGroup(id).subscribe(value => this.students = value);
  }

  updateGroups(id: number) {
    this.universityService.getGroupsByFaculty(id).subscribe(value => this.groups = value);
  }

  updateStudents(id: number) {
    this.universityService.getStudentsByGroup(id).subscribe(value => this.students = value);
  }
}

