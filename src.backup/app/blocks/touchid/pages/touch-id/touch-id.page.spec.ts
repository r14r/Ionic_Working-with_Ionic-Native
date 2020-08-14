import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchIDPage } from './touch-id.page';

describe('TouchIDPage', () => {
  let component: TouchIDPage;
  let fixture: ComponentFixture<TouchIDPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchIDPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchIDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
