import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BraintreePage } from './braintree.page';

describe('BraintreePage', () => {
  let component: BraintreePage;
  let fixture: ComponentFixture<BraintreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BraintreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BraintreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
