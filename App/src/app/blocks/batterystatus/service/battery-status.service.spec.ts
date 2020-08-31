import { TestBed } from '@angular/core/testing';

import { BatteryStatusService } from './battery-status.service';

describe('BatteryStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BatteryStatusService = TestBed.get(BatteryStatusService);
    expect(service).toBeTruthy();
  });
});
