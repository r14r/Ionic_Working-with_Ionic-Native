import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleWalletPage } from './apple-wallet.page';

describe('AppleWalletPage', () => {
  let component: AppleWalletPage;
  let fixture: ComponentFixture<AppleWalletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppleWalletPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleWalletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
