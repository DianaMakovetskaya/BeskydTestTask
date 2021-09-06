import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {UniversityService} from "../../university.service";

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css']
})
export class FacultiesComponent implements OnInit {
  faculties: any[];
  faculty_name:string;
  faculty_id:number;
  @Output()
  getFacultyId = new EventEmitter<number>();
  constructor(private universityService: UniversityService) { }

  ngOnInit(): void {
    this.getFaculties();

  }
  getFaculties(){
    this.universityService.getFaculties().subscribe(value => this.faculties = value)

  }
  submit() {
    console.log(this.faculty_name)
    this.universityService.postFaculty(this.faculty_name).subscribe(()=>{
      this.getFaculties();
    });
  }
  getBubble(id: number): void {
    this.getFacultyId.emit(id);
  }


}
