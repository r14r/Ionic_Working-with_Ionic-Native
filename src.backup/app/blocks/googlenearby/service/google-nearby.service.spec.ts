import { TestBed } from '@angular/core/testing';

import { GoogleNearbyService } from './google-nearby.service';

describe('GoogleNearbyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleNearbyService = TestBed.get(GoogleNearbyService);
    expect(service).toBeTruthy();
  });
});
