import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsFirebasePage } from './analytics-firebase.page';

describe('AnalyticsFirebasePage', () => {
  let component: AnalyticsFirebasePage;
  let fixture: ComponentFixture<AnalyticsFirebasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsFirebasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsFirebasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
