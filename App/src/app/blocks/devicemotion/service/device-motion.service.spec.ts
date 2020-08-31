import { TestBed } from '@angular/core/testing';

import { DeviceMotionService } from './device-motion.service';

describe('DeviceMotionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviceMotionService = TestBed.get(DeviceMotionService);
    expect(service).toBeTruthy();
  });
});
