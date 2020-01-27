import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-act7-data-driven',
  templateUrl: './act7-data-driven.component.html',
  styleUrls: ['./act7-data-driven.component.css']
})

export class Act7DataDrivenComponent implements OnInit {
  public fillUp = true;
  public edit = false;
  public zipcode: string
  public state: string
  public city: string
  public street: string
  public email: string
  public lastname: string
  public firstname: string
  public zipcode2: string
  public state2: string
  public city2: string
  public street2: string
  public email2: string
  public lastname2: string
  public firstname2: string

  reactiveForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
    })
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  onSubmitData() {
    this.edit = true;
  }
}
