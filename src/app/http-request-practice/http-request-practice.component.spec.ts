import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpRequestPracticeComponent } from './http-request-practice.component';

describe('HttpRequestPracticeComponent', () => {
  let component: HttpRequestPracticeComponent;
  let fixture: ComponentFixture<HttpRequestPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpRequestPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpRequestPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
