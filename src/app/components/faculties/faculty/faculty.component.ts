import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  @Input()
  faculty: any;
  @Output()
  bubbleUp = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  showGroups(): void{
    this.bubbleUp.emit(this.faculty.faculty_id);
  }

}
