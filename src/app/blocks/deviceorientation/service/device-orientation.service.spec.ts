import { TestBed } from '@angular/core/testing';

import { DeviceOrientationService } from './device-orientation.service';

describe('DeviceOrientationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviceOrientationService = TestBed.get(DeviceOrientationService);
    expect(service).toBeTruthy();
  });
});
