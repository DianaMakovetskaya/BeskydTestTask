import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UniversityService} from "../../university.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  @Input()
  studentsInfo:any;
  studentName:string;
  course:number;
  @Output()
  createStudentBubble = new EventEmitter<number>();
  constructor(private universityService: UniversityService) { }

  ngOnInit(): void {
    this.studentName = '';
  }

  createStudent() {
    if(this.studentName!='' && this.course!=undefined){
      this.universityService.postStudent({student_name:this.studentName,course:this.course,group_id:this.studentsInfo.group_id}).subscribe((value)=>{
        console.log(value);
        this.createStudentBubble.emit(this.studentsInfo.group_id)
      });
    }else{
      alert('Wrong or empty data!');
    }

  }
}
