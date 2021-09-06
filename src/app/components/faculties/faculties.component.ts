import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {UniversityService} from "../../university.service";
import {Faculty} from "../../model/faculty";
import {Observable} from "rxjs";

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css']
})
export class FacultiesComponent implements OnInit {
  faculties: Faculty[];
  faculty_name:string;
  faculty_id:number;
  subject:Observable<number>;
  @Output()
  getFacultyId = new EventEmitter<number>();
  constructor(private universityService: UniversityService) {
    this.subject = this.universityService.loader$;
  }

  ngOnInit(): void {
    this.getFaculties();
    this.faculty_name = ''
  }
  async getFaculties(){
    this.faculties = await this.universityService.getFaculties().toPromise();

  }
  submit() {
    if(this.faculty_name!=''){
      this.universityService.postFaculty(this.faculty_name).subscribe(()=>{
        this.getFaculties();
      });
    }else{
      alert('write smth')
    }

  }
  getBubble(id: number): void {
    this.getFacultyId.emit(id);
  }


}
