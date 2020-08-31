import { TestBed } from '@angular/core/testing';

import { FingerprintAIOService } from './fingerprint-aio.service';

describe('FingerprintAIOService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FingerprintAIOService = TestBed.get(FingerprintAIOService);
    expect(service).toBeTruthy();
  });
});
