import { TestBed } from '@angular/core/testing';

import { AppAvailabilityService } from './app-availability.service';

describe('AppAvailabilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppAvailabilityService = TestBed.get(AppAvailabilityService);
    expect(service).toBeTruthy();
  });
});
