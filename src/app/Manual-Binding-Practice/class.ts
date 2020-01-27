/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual',
  template: '<h1 class=primary> This is manual </h1>',
  styles: ['.primary{color:navy;font-size:90px;text-align:center}']
})
export class Manual implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/

// REPRESENTS AS THE PARENT

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'class-binding',
  template: '<p>Parent Template</p>' +
    '<input type="text" [(ngModel)]=pdata>' +
    ' <p>Data from child : {{cdata}}</p>  <hr>' +
    '<style-binding (childEvent)="cdata=$event" [parentData]="pdata"></style-binding>',
  styles: ['']
})

export class Class implements OnInit {
  constructor() { }
  ngOnInit() { }

  public pdata: string;
  public cdata: string;
}