import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMinimizePage } from './app-minimize.page';

describe('AppMinimizePage', () => {
  let component: AppMinimizePage;
  let fixture: ComponentFixture<AppMinimizePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMinimizePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMinimizePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
