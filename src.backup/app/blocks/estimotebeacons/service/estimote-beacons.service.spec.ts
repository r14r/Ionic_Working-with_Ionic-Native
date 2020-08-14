import { TestBed } from '@angular/core/testing';

import { EstimoteBeaconsService } from './estimote-beacons.service';

describe('EstimoteBeaconsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstimoteBeaconsService = TestBed.get(EstimoteBeaconsService);
    expect(service).toBeTruthy();
  });
});
