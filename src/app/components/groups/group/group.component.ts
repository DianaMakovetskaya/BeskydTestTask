import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  @Input()
  group: any;
  @Output()
  bubbleUp = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  showStudents() {
    this.bubbleUp.emit(this.group.group_id);

  }
}
