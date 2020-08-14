import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FCMPage } from './fcm.page';

describe('FCMPage', () => {
  let component: FCMPage;
  let fixture: ComponentFixture<FCMPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FCMPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FCMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
