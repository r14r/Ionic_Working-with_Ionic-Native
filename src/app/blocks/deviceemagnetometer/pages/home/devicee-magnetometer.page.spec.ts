import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceeMagnetometerPage } from './devicee-magnetometer.page';

describe('DeviceeMagnetometerPage', () => {
  let component: DeviceeMagnetometerPage;
  let fixture: ComponentFixture<DeviceeMagnetometerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceeMagnetometerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceeMagnetometerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
