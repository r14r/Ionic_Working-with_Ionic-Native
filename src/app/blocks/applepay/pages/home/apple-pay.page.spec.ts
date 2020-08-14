import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplePayPage } from './apple-pay.page';

describe('ApplePayPage', () => {
  let component: ApplePayPage;
  let fixture: ComponentFixture<ApplePayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplePayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplePayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
