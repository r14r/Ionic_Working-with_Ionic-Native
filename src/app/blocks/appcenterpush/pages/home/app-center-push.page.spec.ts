import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCenterPushPage } from './app-center-push.page';

describe('AppCenterPushPage', () => {
  let component: AppCenterPushPage;
  let fixture: ComponentFixture<AppCenterPushPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCenterPushPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCenterPushPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
