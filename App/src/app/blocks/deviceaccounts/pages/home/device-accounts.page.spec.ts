import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceAccountsPage } from './device-accounts.page';

describe('DeviceAccountsPage', () => {
  let component: DeviceAccountsPage;
  let fixture: ComponentFixture<DeviceAccountsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceAccountsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceAccountsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
