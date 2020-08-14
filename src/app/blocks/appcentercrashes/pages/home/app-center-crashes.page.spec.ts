import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCenterCrashesPage } from './app-center-crashes.page';

describe('AppCenterCrashesPage', () => {
  let component: AppCenterCrashesPage;
  let fixture: ComponentFixture<AppCenterCrashesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCenterCrashesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCenterCrashesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
