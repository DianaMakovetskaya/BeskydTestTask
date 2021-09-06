import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Faculty} from "./model/faculty";

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  subject= new BehaviorSubject(1);
  loader$ = this.subject.asObservable();
  constructor(public httpClient:HttpClient) { }
  getFaculties(){
    this.setValue(2);
    return this.httpClient.get<Faculty[]>('http://localhost:5000/faculties')
  }
  postFaculty(name:any):Observable<any>{
    // let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.httpClient.post<Faculty>('http://localhost:5000/faculties', {faculty_name:name})
  }
  getGroupsByFaculty(faculty_id:number):Observable<any>{
    return this.httpClient.get<any[]>(`http://localhost:5000/groupsByFaculty/${faculty_id}`)

  }
  getStudentsByGroup(group_id:number){
    return this.httpClient.get(`http://localhost:5000/studentsByGroup/${group_id}`)
  }
  postGroup(obj:any):Observable<any>{
    return this.httpClient.post<any>('http://localhost:5000/groups',obj)

  }
  postStudent(obj:any):Observable<any>{
    return this.httpClient.post<any>('http://localhost:5000/students',obj)

  }
  setValue(param:number){
    this.subject.next(param);
  }
}
