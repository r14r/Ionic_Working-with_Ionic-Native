import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InAppPurchase2Page } from './in-app-purchase2.page';

describe('InAppPurchase2Page', () => {
  let component: InAppPurchase2Page;
  let fixture: ComponentFixture<InAppPurchase2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InAppPurchase2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InAppPurchase2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
