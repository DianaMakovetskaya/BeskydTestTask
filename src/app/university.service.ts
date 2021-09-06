import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor(public httpClient:HttpClient) { }
  getFaculties(){
    return this.httpClient.get<any[]>('http://localhost:5000/faculties')
  }
  postFaculty(name:any):Observable<any>{
    // let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.httpClient.post<any>('http://localhost:5000/faculties', {faculty_name:name})
  }
  getGroupsByFaculty(faculty_id:number):Observable<any>{
    return this.httpClient.get<any[]>(`http://localhost:5000/groupsByFaculty/${faculty_id}`)

  }
  getStudentsByGroup(group_id:number):Observable<any>{
    return this.httpClient.get<any[]>(`http://localhost:5000/studentsByGroup/${group_id}`)

  }
  postGroup(obj:any):Observable<any>{
    return this.httpClient.post<any>('http://localhost:5000/groups',obj)

  }
  postStudent(obj:any):Observable<any>{
    return this.httpClient.post<any>('http://localhost:5000/students',obj)

  }
}
