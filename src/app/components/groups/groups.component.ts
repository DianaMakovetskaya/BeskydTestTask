import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UniversityService} from "../../university.service";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  @Input()
  groupsInfo:any;
  @Output()
  getGroupId = new EventEmitter<number>();
  @Output()
  createGroupBubble = new EventEmitter<number>();
  groupName:string;
  constructor(private universityService: UniversityService) {
  }

  ngOnInit(): void {
  }
  getBubble(id: number): void {
    this.getGroupId.emit(id);
  }
  createGroup() {
    this.universityService.postGroup({group_name:this.groupName,faculty_id:this.groupsInfo.faculty_id}).subscribe((value)=>{
      console.log(value);
      this.createGroupBubble.emit(this.groupsInfo.faculty_id)
    });
  }
}
