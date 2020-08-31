import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HTTPPage } from './http.page';

describe('HTTPPage', () => {
  let component: HTTPPage;
  let fixture: ComponentFixture<HTTPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HTTPPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HTTPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
