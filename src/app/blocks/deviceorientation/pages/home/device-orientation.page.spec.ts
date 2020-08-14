import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceOrientationPage } from './device-orientation.page';

describe('DeviceOrientationPage', () => {
  let component: DeviceOrientationPage;
  let fixture: ComponentFixture<DeviceOrientationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceOrientationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceOrientationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
