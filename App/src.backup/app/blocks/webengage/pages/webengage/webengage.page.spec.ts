import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebengagePage } from './webengage.page';

describe('WebengagePage', () => {
  let component: WebengagePage;
  let fixture: ComponentFixture<WebengagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebengagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebengagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
