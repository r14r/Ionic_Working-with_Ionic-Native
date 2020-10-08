import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineLoginPage } from './line-login.page';

describe('LineLoginPage', () => {
  let component: LineLoginPage;
  let fixture: ComponentFixture<LineLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
