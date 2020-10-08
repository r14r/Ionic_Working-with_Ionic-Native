import { TestBed } from '@angular/core/testing';

import { ZeroconfService } from './zeroconf.service';

describe('ZeroconfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZeroconfService = TestBed.get(ZeroconfService);
    expect(service).toBeTruthy();
  });
});
