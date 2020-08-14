import { TestBed } from '@angular/core/testing';

import { HealthKitService } from './health-kit.service';

describe('HealthKitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HealthKitService = TestBed.get(HealthKitService);
    expect(service).toBeTruthy();
  });
});
