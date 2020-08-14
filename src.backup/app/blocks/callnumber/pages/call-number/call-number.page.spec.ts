import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallNumberPage } from './call-number.page';

describe('CallNumberPage', () => {
  let component: CallNumberPage;
  let fixture: ComponentFixture<CallNumberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallNumberPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallNumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
