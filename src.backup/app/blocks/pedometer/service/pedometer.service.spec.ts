import { TestBed } from '@angular/core/testing';

import { PedometerService } from './pedometer.service';

describe('PedometerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PedometerService = TestBed.get(PedometerService);
    expect(service).toBeTruthy();
  });
});
