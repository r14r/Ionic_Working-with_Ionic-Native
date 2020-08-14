import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMSPage } from './sms.page';

describe('SMSPage', () => {
  let component: SMSPage;
  let fixture: ComponentFixture<SMSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SMSPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
