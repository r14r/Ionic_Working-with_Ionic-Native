import { TestBed } from '@angular/core/testing';

import { DeviceeMagnetometerService } from './devicee-magnetometer.service';

describe('DeviceeMagnetometerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviceeMagnetometerService = TestBed.get(DeviceeMagnetometerService);
    expect(service).toBeTruthy();
  });
});
