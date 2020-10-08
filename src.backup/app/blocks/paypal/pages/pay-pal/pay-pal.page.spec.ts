import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPalPage } from './pay-pal.page';

describe('PayPalPage', () => {
  let component: PayPalPage;
  let fixture: ComponentFixture<PayPalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayPalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayPalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
