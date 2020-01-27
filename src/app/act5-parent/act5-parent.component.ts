import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-act5-parent',
  templateUrl: './act5-parent.component.html',
  styleUrls: ['./act5-parent.component.css']
})
export class Act5ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // variables that will hold the values from HTML
  public fname: string;
  public enroll: boolean = false;
  public genderChoice: string;
  // variables that will hold the value of variables from HTML
  public genderC: string;
  public fn: string;
  public en: string = "";

  people : any [] = [{
    'name' : 'ana'
  }]

  onSubmit() {
    if (this.fname == "") {
      alert("nothing to submit");
    } else {
      this.fn = this.fname; // if unsay sulod ni fn, iyang ipasa kang fname
      if (this.enroll) { // check if enroll checkebox is true or false (checked or not)
        this.en = "Yes"
      } else {
        this.en = "No"
      }
      this.genderC = this.genderChoice;

      this.fname = ""; // empty the textfield for fullname
      this.enroll = false;
      this.genderChoice = ""
    }
  }
}

