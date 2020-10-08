import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRatePage } from './app-rate.page';

describe('AppRatePage', () => {
  let component: AppRatePage;
  let fixture: ComponentFixture<AppRatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
