import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FacultiesComponent } from './components/faculties/faculties.component';
import { GroupsComponent } from './components/groups/groups.component';
import { StudentsComponent } from './components/students/students.component';
import {FacultyComponent} from "./components/faculties/faculty/faculty.component";
import { GroupComponent } from './components/groups/group/group.component';
import { StudentComponent } from './components/students/student/student.component';

@NgModule({
    declarations: [
        AppComponent,
        FacultiesComponent,
        GroupsComponent,
        StudentsComponent,
        FacultyComponent,
        GroupComponent,
        StudentComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
