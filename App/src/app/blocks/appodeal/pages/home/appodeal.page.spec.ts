import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppodealPage } from './appodeal.page';

describe('AppodealPage', () => {
  let component: AppodealPage;
  let fixture: ComponentFixture<AppodealPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppodealPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppodealPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
