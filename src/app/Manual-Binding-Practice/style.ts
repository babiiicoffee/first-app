//  REPRESENTS AS THE CHILD

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'style-binding',
    // template : `<button [style.background]="isActive ? blue : red">style</button>`,
    template: '<p>Child Template From parent Data : {{parentData}}</p>' +
        '<input type="text" [(ngModel)]="cdata"  (keyup)="onChange(cdata)">',
})

export class Style implements OnInit {
    isActive = true;

    constructor() { }
    ngOnInit() { }

    @Input() parentData: string;
    @Output() childEvent = new EventEmitter;

    public cdata: string;

    onChange(value: string) {
        this.childEvent.emit(value);
    }
}