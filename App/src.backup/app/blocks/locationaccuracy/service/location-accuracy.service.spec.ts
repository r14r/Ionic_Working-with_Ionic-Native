import { TestBed } from '@angular/core/testing';

import { LocationAccuracyService } from './location-accuracy.service';

describe('LocationAccuracyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocationAccuracyService = TestBed.get(LocationAccuracyService);
    expect(service).toBeTruthy();
  });
});
