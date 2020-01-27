
import {Component, OnInit} from '@angular/core';

@Component({
    selector : 'event-binding',
    template : '<button (click)="clickMe()">event!</button>',
    // template : '<button (click="clickMe()">click me!</button>',
    styles : ['']
})

export class Event implements OnInit{
    constructor() {}
    ngOnInit(){}

    clickMe(){
        console.log("you clicked me!")
    }
}