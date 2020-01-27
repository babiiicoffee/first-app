import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-act7-template-driven',
  templateUrl: './act7-template-driven.component.html',
  styleUrls: ['./act7-template-driven.component.css']
})
export class Act7TemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('hi')
  }

}
