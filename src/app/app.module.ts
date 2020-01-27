import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManualComponent } from './manual/manual.component';
import {Style} from './Manual-Binding-Practice/style';
import {Event} from './Manual-Binding-Practice/event';
import {Class} from './Manual-Binding-Practice/class';
import { Act5ChildComponent } from './act5-child/act5-child.component';
import { Act5ParentComponent } from './act5-parent/act5-parent.component';
import { Act7DataDrivenComponent } from './act7-data-driven/act7-data-driven.component';
import { Act7TemplateDrivenComponent } from './act7-template-driven/act7-template-driven.component';
import { HttpRequestPracticeComponent } from './http-request-practice/http-request-practice.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ManualComponent,
    Style,
    Event,
    Class,
    Act5ChildComponent,
    Act5ParentComponent,
    Act7DataDrivenComponent,
    Act7TemplateDrivenComponent,
    HttpRequestPracticeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
