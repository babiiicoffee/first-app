import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-act5-child',
  templateUrl: './act5-child.component.html',
  styleUrls: ['./act5-child.component.css']
})
export class Act5ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() fullname: string;
  @Input() enroll: boolean;
  @Input() gender: string;

  @Output() addNotification = new EventEmitter;

  public fname: string;

  onApprove() {
    if (this.fullname == "") {
      alert("nothing to approve")
    } else {
      this.addNotification.emit("Approved");
    }
  }

  onDecline() {
    if (this.fullname == "") {
      alert("nothing to approve")
    } else {
      this.addNotification.emit("Disapproved");
    }
  }

}
