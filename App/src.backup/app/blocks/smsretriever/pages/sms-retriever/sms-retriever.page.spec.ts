import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsRetrieverPage } from './sms-retriever.page';

describe('SmsRetrieverPage', () => {
  let component: SmsRetrieverPage;
  let fixture: ComponentFixture<SmsRetrieverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsRetrieverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsRetrieverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
